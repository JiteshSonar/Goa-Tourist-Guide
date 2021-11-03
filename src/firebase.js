import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl1qHZGyXuyZFTxo60_cdiypVucWXXYZA",
  authDomain: "touristguide-b200f.firebaseapp.com",
  projectId: "touristguide-b200f",
  storageBucket: "touristguide-b200f.appspot.com",
  messagingSenderId: "624018022952",
  appId: "1:624018022952:web:3526c936e34d16951acb1d",
  measurementId: "G-Z29P7YJGJ6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
