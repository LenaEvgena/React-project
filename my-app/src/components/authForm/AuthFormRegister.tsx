import React from 'react'
import AuthForm from './AuthForm';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAuthName, removeAuthPassword } from '../../redux/actions';

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

  const handleRegister = () => {
    if (!userName || !password) return; // todo validation

    createUserWithEmailAndPassword(auth, userName, password)
      .then((userCredential) => {
        const user = userCredential.user;
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
