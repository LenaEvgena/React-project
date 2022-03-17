import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebase = initializeApp({
  apiKey: "AIzaSyBekXAz4h5J0d1jc2r1tyfz5OGeNbWr-W8",
  authDomain: "moviesdb-react.firebaseapp.com",
  projectId: "moviesdb-react",
  storageBucket: "moviesdb-react.appspot.com",
  messagingSenderId: "554361702312",
  appId: "1:554361702312:web:4f74138ed80c08f4a17f9d"
});

export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);

//observer
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
