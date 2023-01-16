// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9CSR0Yx1Hbqwta8aHutGWPZIVkj16Sg0",
  authDomain: "driver-app-1763a.firebaseapp.com",
  databaseURL: "https://driver-app-1763a-default-rtdb.firebaseio.com",
  projectId: "driver-app-1763a",
  storageBucket: "driver-app-1763a.appspot.com",
  messagingSenderId: "380903209935",
  appId: "1:380903209935:web:f32671e9288957414230ba",
  measurementId: "G-4EHEPEXWCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
