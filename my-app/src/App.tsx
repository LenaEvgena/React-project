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
import FavoriteDetailsPage from './components/pages/FavoriteDetailsPage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import './style.scss';

const App: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/register' element={<AuthFormRegister />} />
        <Route path='/auth' element={<AuthFormLogin />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/movie/:id' element={<DetailsPage />} />
        {user ?
          <Route path='/favorite' element={<FavorPage />} /> :
          <Route path='/' element={<HomePage />} />
        }
        <Route path='/favorite/movie/:id' element={<FavoriteDetailsPage />} />
      </Routes>
      <Footer />
      <ScrollButton />
    </BrowserRouter>
  )
};

export default App;
