import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AuthFormLogin from './components/authForm/AuthFormLogin';
import ErrorPage from './components/errorPage/ErrorPage';
import ScrollButton from './components/common/scrollButton/ScrollButton';
import AuthFormRegister from './components/authForm/AuthFormRegister';
import Footer from './components/common/footer/Footer';
import HomePage from './components/pages/homePage';
import DetailsPage from './components/pages/detailsPage';
import FavorPage from './components/pages/favorPage';
import './style.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/register' element={<AuthFormRegister />} />
        <Route path='/auth' element={<AuthFormLogin />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/movie/:id' element={<DetailsPage />} />
        <Route path='/favorite' element={<FavorPage />} />
      </Routes>
      <Footer />
      <ScrollButton />
    </BrowserRouter>
  )
};

export default App;
