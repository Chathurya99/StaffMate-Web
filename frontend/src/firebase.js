// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9jMYUyvqFuiP2N-UF_hV-frrdqdNw9rM",
  authDomain: "staffmate-1df34.firebaseapp.com",
  projectId: "staffmate-1df34",
  storageBucket: "staffmate-1df34.appspot.com",
  messagingSenderId: "926005930457",
  appId: "1:926005930457:web:5441025752de7b94cb51c8",
  measurementId: "G-521H0MFK5W"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);