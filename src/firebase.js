// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBqHwUVa4OkyFOyOH3LhUxaCZHRoSF_Idw",
    authDomain: "clone-b5c4f.firebaseapp.com",
    projectId: "clone-b5c4f",
    storageBucket: "clone-b5c4f.appspot.com",
    messagingSenderId: "388557421308",
    appId: "1:388557421308:web:be9373f3abf72381027579",
    measurementId: "G-ZN6TL7Q9YX"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export  { db, auth };