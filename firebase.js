// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkZsMTDW-fQK8Taa7FG8JbqSZ-tFEqsvg",
  authDomain: "flashcard-saas-c4606.firebaseapp.com",
  projectId: "flashcard-saas-c4606",
  storageBucket: "flashcard-saas-c4606.appspot.com",
  messagingSenderId: "868581921663",
  appId: "1:868581921663:web:17a53fcb594b6fcc34004a",
  measurementId: "G-CBL22HBL2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};