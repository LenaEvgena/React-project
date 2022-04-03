import React from 'react'
import AuthForm, { SchemaType } from './AuthForm';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

type PropsType = {
  isRegisterForm: boolean,
}

const AuthFormContainer: React.FC<PropsType> = ({ isRegisterForm }) => {
  const navigate = useNavigate();

  const handleLoginOrRegister = (values: SchemaType): void => {
    if (isRegisterForm) {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // const user = userCredential.user;
          navigate('/');
        })
        .catch((error) => {
          alert('User already exists!');
        });
    } else {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          navigate('/');
        })
        .catch((error) => {
          alert('Email not found or invalid password!');
        });
    }
  }

  return (
    <AuthForm title={isRegisterForm ? 'register' : 'log in'} handleClick={handleLoginOrRegister} />
  )
}

export default AuthFormContainer;
