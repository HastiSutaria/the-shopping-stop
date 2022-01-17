
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBkWBYgEsYyc7SwLEMlAAFCd1Mp1uPwEko",
  authDomain: "shoppingstop-4d309.firebaseapp.com",
  projectId: "shoppingstop-4d309",
  storageBucket: "shoppingstop-4d309.appspot.com",
  messagingSenderId: "1001834739072",
  appId: "1:1001834739072:web:0daeed1605602e0ce3bd65",
  measurementId: "G-6CX92K94D1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
