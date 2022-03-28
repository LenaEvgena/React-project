import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import AuthFormContainer from './components/authForm/AuthFormContainer';
import ErrorPage from './components/errorPage/ErrorPage';
import ScrollButton from './components/common/scrollButton/ScrollButton';
import Footer from './components/common/footer/Footer';
import HomePage from './pages/HomePage';
import HomeDetailsPage from './pages/HomeDetailsPage';
import FavoritePage from './pages/FavoritePage';
import FavoriteDetailsPage from './pages/FavoriteDetailsPage';
import useAuth from './hooks/useAuth';
import './style.scss';

const App: React.FC = () => {
  const user = useAuth();
  return (
    <BrowserRouter basename='/React-project'>
      <HeaderContainer />
      <Routes>
        <Route path='/register' element={<AuthFormContainer isRegisterForm={true} />} />
        <Route path='/auth' element={<AuthFormContainer isRegisterForm={false} />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/movie/:id' element={<HomeDetailsPage />} />
        {user ?
          <Route path='/favorite' element={<FavoritePage />} /> :
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
