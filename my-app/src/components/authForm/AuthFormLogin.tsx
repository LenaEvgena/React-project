import React from 'react'
import AuthForm from './AuthForm';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { auth } from '../../firebase';

const AuthFormLogin = () => {
  const { userName, password } = useTypedSelector(state => state);

  const handleLogin = () => {
    if (!userName || !password) return; // todo validation

    signInWithEmailAndPassword(auth, userName, password)
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
    <AuthForm title='log in' handleClick={handleLogin} />
  )
}

export default AuthFormLogin;
