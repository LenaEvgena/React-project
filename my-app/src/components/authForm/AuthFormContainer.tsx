import React from 'react'
import AuthForm, { SchemaType } from './AuthForm';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAuthName, removeAuthPassword, setAuthName, setAuthPassword } from '../../redux/actions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

type PropsType = {
  isRegisterForm: boolean,
}

const AuthFormContainer: React.FC<PropsType> = ({ isRegisterForm }) => {
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

  const handleLoginOrRegister = (values: SchemaType): void => {
    if (isRegisterForm) {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // const user = userCredential.user;
          dispatch(setAuthName(values.email));
          dispatch(setAuthPassword(values.password));
          navigate('/');
        })
        .catch((error) => {
          alert('User already exists!');
          handleReset();
        });
    } else {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          dispatch(setAuthName(values.email));
          dispatch(setAuthPassword(values.password));
          navigate('/');
        })
        .catch((error) => {
          alert('Email not found or invalid password!');
          handleReset();
        });
    }
  }

  return (
    <AuthForm title={isRegisterForm ? 'register' : 'log in'} handleClick={handleLoginOrRegister} handleReset={handleReset} />
  )
}

export default AuthFormContainer;
