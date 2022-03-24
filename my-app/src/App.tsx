import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import AuthFormContainer from './components/authForm/AuthFormContainer';
import ErrorPage from './components/errorPage/ErrorPage';
import ScrollButton from './components/common/scrollButton/ScrollButton';
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
    <BrowserRouter basename='/React-project'>
      <HeaderContainer />
      <Routes>
        <Route path='/register' element={<AuthFormContainer isRegisterForm={true} />} />
        <Route path='/auth' element={<AuthFormContainer isRegisterForm={false} />} />
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
