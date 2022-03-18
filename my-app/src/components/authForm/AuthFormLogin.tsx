import React from 'react'
import AuthForm from './AuthForm';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAuthName, removeAuthPassword } from '../../redux/actions';

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

  const handleLogin = () => {
    if (!userName || !password) return; // todo validation

    signInWithEmailAndPassword(auth, userName, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/');
        handleReset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Email not found or invalid password!');
        handleReset();
      });
  }

  return (
    <AuthForm title='log in' handleClick={handleLogin} />
  )
}

export default AuthFormLogin;
