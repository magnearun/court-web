import { NextPage } from "next";
import {
  useCollection,
  useCollectionOnce,
  useDocument,
} from "react-firebase-hooks/firestore";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  query,
  collectionGroup,
  getDocs,
  DocumentData,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

import firebase from "../firebase/clientApp";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { format, getMonth } from "date-fns";
import styled, { css } from "styled-components";
import {
  ArrowIosBackOutline,
  ArrowIosForwardOutline,
} from "@styled-icons/evaicons-outline";
import { darken } from "polished";
import { theme } from "@/styles/theme";
import { LoginModal } from "@/components/LoginModal";
import { Button } from "@mui/material";
import { mq } from "@/styles/media";

interface Court {
  id: string;
  available: number;
}

interface Slot {
  id: string;
  available: number;
  time: string;
  courts: Array<Court>;
}

const db = getFirestore(firebase.app());

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  ${mq.md} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Calendar = styled.div`
  border-right: 1px solid ${({ theme }) => theme.palette.background.main};
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.md} {
    flex-direction: row;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Slots = styled.div`
  padding: 1rem;
`;

const Slot = styled.div<{ available: boolean; selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.main};
  width: 90px;
  height: 60px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.palette.primary.light};
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.main};

  &:not(:last-child) {
    margin-right: 20px;
  }

  ${({ available }) =>
    !available &&
    css`
      pointer-events: none;
      color: ${({ theme }) => darken(0.3, theme.palette.background.main)};
      text-decoration: line-through;
      border-color: ${({ theme }) =>
        darken(0.1, theme.palette.background.main)};
      background-color: ${({ theme }) => theme.palette.background.main};
    `}
  ${({ selected }) =>
    selected &&
    css`
      font-weight: 600;
      border-color: ${({ theme }) => theme.palette.primary.main};
    `}

  }
`;
const Header = styled.div`
  display: flex;
  padding: 2em;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.background.main}`};
`;

const Heading = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.primary.main};

  ${mq.xs} {
    font-size: 30px;
  }
`;

const DatePickerHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  min-width: 100%;
  ${mq.md} {
    min-width: 50%;
    border-radius: 10px;
    overflow: hidden;
    border: ${({ theme }) => `1px solid ${theme.palette.primary.light}`};
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }
`;

const Subheading = styled.h3`
  font-size: 16px;
  font-weight: 300;
`;

const ArrowButtons = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

const Availability: NextPage = () => {
  const [slots, setSlots] = useState<Record<string, any> | undefined>(
    undefined
  );
  const [startDate, setStartDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<Slot | undefined>(undefined);

  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const getData = async () => {
      const slotsRef = collection(
        db,
        "availability",
        format(startDate, "dd-MM-yyyy"),
        "slots"
      );
      const slotsSnapshot = await getDocs(slotsRef);

      const slotsData: Record<string, any> = slotsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const data = Object.keys(slotsData).map(async (x) => {
        const time = slotsData[x].id;
        const courtRef = collection(
          db,
          "availability",
          format(startDate, "dd-MM-yyyy"),
          "slots",
          time,
          "courts"
        );
        const courtSnapshot = await getDocs(courtRef);
        const courtsData = courtSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const available = Object.keys(courtsData).reduce((acc, curr: any) => {
          const court = courtsData[curr] as any;
          if (court.available > 0) {
            return acc + 1;
          }
          return acc;
        }, 0);

        console.log(slotsData[x]);

        return {
          ...slotsData[x],
          available,
          courts: { ...courtsData },
        };
      });

      setSlots(await Promise.all(data));
    };
    getData();
  }, [startDate]);

  console.log(slots);

  const addBookingDocument = async (time: string, courtId: string) => {
    try {
      const docRef = await addDoc(collection(db, "bookings"), {
        date: startDate,
        time,
        id: "some id",
      });

      const courtRef = doc(
        db,
        "availability",
        format(startDate, "dd-MM-yyyy"),
        "slots",
        time,
        "courts",
        courtId
      );

      await updateDoc(courtRef, {
        available: 0,
      });
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  };

  useEffect(() => {
    open();
    if (!selectedSlot) return;
    if (!!user) {
    }
  }, [selectedSlot]);

  return (
    <>
      <Container>
        <Main>
          <Button variant="contained">Hello World</Button>
          <Header>
            <Heading>{`Lausir tímar - ${format(
              startDate,
              "dd MMMM yyyy"
            )}`}</Heading>
          </Header>
          <ContentRow>
            <Calendar>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                inline
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }: any) => (
                  <DatePickerHeader>
                    <ArrowButtons
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                    >
                      <ArrowIosBackOutline
                        size={20}
                        color={darken(0.4, theme.colors.background)}
                      />
                    </ArrowButtons>
                    <Subheading>{format(date, "MMMM")}</Subheading>

                    <ArrowButtons
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                    >
                      <ArrowIosForwardOutline
                        size={20}
                        color={darken(0.4, theme.colors.background)}
                      />
                    </ArrowButtons>
                  </DatePickerHeader>
                )}
              />
            </Calendar>

            <Slots>
              <Row>
                {slots &&
                  slots?.map((x: any) => {
                    console.log(x.id, x.time, x.courts, x.available);
                    return (
                      <Slot
                        key={x.id}
                        onClick={() => setSelectedSlot(x)}
                        available={x.available > 0}
                        selected={x.id === selectedSlot?.id}
                      >
                        <p>{x.id}</p>
                      </Slot>
                    );
                  })}
              </Row>
            </Slots>
          </ContentRow>
        </Main>
      </Container>

      <LoginModal show={showDialog} onClose={close} />
    </>
  );
};

export default Availability;
