import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA72Ow49yByAou8_2lB6Wl6_kX2doddDfw",
  authDomain: "theshopppingstop.firebaseapp.com",
  projectId: "theshopppingstop",
  storageBucket: "theshopppingstop.appspot.com",
  messagingSenderId: "666971771125",
  appId: "1:666971771125:web:aaf575ffcabfd0505d75bc",
  measurementId: "G-NM27KXBPVP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
