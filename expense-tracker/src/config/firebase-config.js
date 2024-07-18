

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth' ; 
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJm2BqIHbNaE_1NVFzyj492mGW2JvGM2w",
  authDomain: "expense-tracker-30157.firebaseapp.com",
  projectId: "expense-tracker-30157",
  storageBucket: "expense-tracker-30157.appspot.com",
  messagingSenderId: "579451025936",
  appId: "1:579451025936:web:b31f37b658060e62462895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider() ; 
export const db = getFirestore(app) ; 


// firebase login
// firebase init
// firebase deploy

