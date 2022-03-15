import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/common/footer/Footer';
import Main from './components/main/Main';
import MovieDetails from './components/movieDetails/MovieDetails';
import ErrorPage from './components/errorPage/ErrorPage';
import ScrollButton from './components/common/scrollButton/ScrollButton';
import './style.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Main />
      <Footer />
      <ScrollButton />
    </BrowserRouter>
  )
};

export default App;
