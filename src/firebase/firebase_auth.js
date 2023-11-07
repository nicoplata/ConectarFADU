// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpB0Nulm36gXcR-_FqASNRGZrsaeOizag",
  authDomain: "conectarfadu.firebaseapp.com",
  databaseURL: "https://conectarfadu-default-rtdb.firebaseio.com",
  projectId: "conectarfadu",
  storageBucket: "conectarfadu.appspot.com",
  messagingSenderId: "1047235266422",
  appId: "1:1047235266422:web:cb86ec652737bee63c1c57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);