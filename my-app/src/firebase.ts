import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { setDoc, deleteDoc, doc } from "firebase/firestore";
import { ItemType, UserImplType } from './types/types';

const firebase = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID
});

export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);

export const sendFavor = async (id: number, user: UserImplType, data: ItemType | null) => {
  if (!user) return;
  await setDoc(doc(firestore, user?.uid, `${id}`), {
    films: data
  })
}

export const deleteFavor = async (id: number, user: UserImplType) => {
  await deleteDoc(doc(firestore, user?.uid, `${id}`))
}
