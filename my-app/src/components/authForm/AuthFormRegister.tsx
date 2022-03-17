import React from 'react'
import AuthForm from './AuthForm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useTypedSelector } from '../../hooks/useTypedSelector';

const AuthFormRegister = () => {
  const { userName, password } = useTypedSelector(state => state);

  const handleRegister = () => {
    const auth = getAuth();

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
    <AuthForm title='Register' handleClick={handleRegister} />
  )
}

export default AuthFormRegister;
