const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
const { format, addDays, addYears, addMonths } = require("date-fns");

var admin = require("firebase-admin");

var serviceAccount = require("./court-booking-service-firebase-adminsdk-um9ij-36f2db4bd8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();
const time = [
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
];

const day = time.map(() => {
  return {
    time: time,
    available: 4,
    price: 5000,
  };
});

let date = new Date();

const col = db.collection("availability");

const slotRef = col.doc(format(date, "dd-MM-yyyy")).collection("slots");


const snapshot = await ref.get();
snapshot.forEach((doc) => {
  console.log(doc.id, "=>", doc.data());
});
// while (date < addMonths(new Date(), 1)) {
//   doc.set({ day });
//   date = addDays(date, 1);
// }
