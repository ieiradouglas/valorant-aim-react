// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCp-abValFae-Uf8MKAGgenb8BvYDDpOSo",
  authDomain: "aim-valorant-c14c2.firebaseapp.com",
  databaseURL: "https://aim-valorant-c14c2-default-rtdb.firebaseio.com",
  projectId: "aim-valorant-c14c2",
  storageBucket: "aim-valorant-c14c2.appspot.com",
  messagingSenderId: "703747586543",
  appId: "1:703747586543:web:09567cf4dc8d6d2df19e1a",
  measurementId: "G-L47YKWZ35Z"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
