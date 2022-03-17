import React from 'react'
import AuthForm from './AuthForm';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { auth } from '../../firebase';

const AuthFormRegister = () => {
  const { userName, password } = useTypedSelector(state => state);

  const handleRegister = () => {
    if (!userName || !password) return; // todo validation

    createUserWithEmailAndPassword(auth, userName, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

      });
  }

  return (
    <AuthForm title='register' handleClick={handleRegister} />
  )
}

export default AuthFormRegister;
