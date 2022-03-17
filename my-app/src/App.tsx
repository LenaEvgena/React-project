import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import MovieDetails from './components/movieDetails/MovieDetails';
import AuthFormLogin from './components/authForm/AuthFormLogin';
import ErrorPage from './components/errorPage/ErrorPage';
import ScrollButton from './components/common/scrollButton/ScrollButton';
import AuthFormRegister from './components/authForm/AuthFormRegister';
import './style.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/register' element={<AuthFormRegister />} />
        <Route path='/auth' element={<AuthFormLogin />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ScrollButton />
    </BrowserRouter>
  )
};

export default App;
