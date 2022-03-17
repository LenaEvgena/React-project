import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import MovieDetails from './components/movieDetails/MovieDetails';
import AuthForm from './components/authForm/AuthForm';
import ErrorPage from './components/errorPage/ErrorPage';
import ScrollButton from './components/common/scrollButton/ScrollButton';
import './style.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/auth' element={<AuthForm />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ScrollButton />
    </BrowserRouter>
  )
};

export default App;
