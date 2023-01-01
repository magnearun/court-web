import { NextPage } from "next";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import firebase from "../firebase/clientApp";

const Bookings: NextPage = () => {
  const [value, loading, error] = useCollection(
    collection(getFirestore(firebase.app()), "bookings"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  console.log(value, loading, error);
  return (
    <div>
      <p>Bookings</p>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <span>
          Collection:{" "}
          {value.docs.map((doc) => (
            <div key={doc.id}>{JSON.stringify(doc.data())}, </div>
          ))}
        </span>
      )}
    </div>
  );
};

export default Bookings;
