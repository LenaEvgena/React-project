import React from 'react'
import AuthForm from './AuthForm';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useTypedSelector } from '../../hooks/useTypedSelector';

const AuthFormLogin = () => {
  const { userName, password } = useTypedSelector(state => state);

  const handleLogin = () => {
    const auth = getAuth();

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
    <AuthForm title='Log in' handleClick={handleLogin} />
  )
}

export default AuthFormLogin;
