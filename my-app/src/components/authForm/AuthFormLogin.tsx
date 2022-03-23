import React from 'react'
import AuthForm, { SchemaType } from './AuthForm';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAuthName, removeAuthPassword, setAuthName, setAuthPassword } from '../../redux/actions';

const AuthFormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName, password } = useTypedSelector(state => state);

  const handleReset = (): void => {
    if (userName.trim()) {
      dispatch(removeAuthName(''));
    };
    if (password.trim()) {
      dispatch(removeAuthPassword(''));
    }
  };

  const handleLogin = (values: SchemaType) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setAuthName(values.email));
        dispatch(setAuthPassword(values.password));
        navigate('/');
      })
      .catch((error) => {
        // const errorMessage = error.message;
        alert('Email not found or invalid password!');
        handleReset();
      });
  }

  return (
    <AuthForm title='log in' handleClick={handleLogin} />
  )
}

export default AuthFormLogin;
