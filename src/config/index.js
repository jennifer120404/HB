// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVTLVvzot5M_smqOh5JHZ3kWlIbrjeYjM",
  authDomain: "habitpic.firebaseapp.com",
  projectId: "habitpic",
  storageBucket: "habitpic.appspot.com",
  messagingSenderId: "623613377874",
  appId: "1:623613377874:web:5bc14a5c31eeb467368e8b",
  measurementId: "G-EMXR1KXK42",
};


// initialize firebase
 initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();
// const db = initializeFirestore();
const db = getFirestore();

const storage = getStorage();
export { auth, db, storage };
