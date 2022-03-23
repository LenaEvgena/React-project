import React from 'react'
import AuthForm, { SchemaType } from './AuthForm';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAuthName, removeAuthPassword, setAuthName, setAuthPassword } from '../../redux/actions';

const AuthFormRegister = () => {
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

  const handleRegister = (values: SchemaType) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setAuthName(values.email));
        dispatch(setAuthPassword(values.password));
        navigate('/');
      })
      .catch((error) => {
        // const errorMessage = error.message;
        alert('User already exists!');
        handleReset();
      });
  }

  return (
    <AuthForm title='register' handleClick={handleRegister} />
  )
}

export default AuthFormRegister;
