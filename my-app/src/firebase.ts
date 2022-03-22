import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { setDoc, deleteDoc, doc } from "firebase/firestore";
import { ItemType, UserFirebaseType } from './types/types';

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

export const sendFavor = async (id: number, user: UserFirebaseType, data: ItemType | null) => {
  if (!user) return;
  await setDoc(doc(firestore, user?.email, `${id}`), {
    films: data
  })
}

export const deleteFavor = async (id: number, user: UserFirebaseType) => {
  await deleteDoc(doc(firestore, user?.email, `${id}`))
}
