// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2OBLm1Ajwn-Ni4izlfrz7djfZ5OwOFmY",
  authDomain: "wdj-goal-tracker.firebaseapp.com",
  projectId: "wdj-goal-tracker",
  storageBucket: "wdj-goal-tracker.firebasestorage.app",
  messagingSenderId: "96393241008",
  appId: "1:96393241008:web:8466daefb504b382f4b675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


