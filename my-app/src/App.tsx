import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import MovieDetails from './components/movieDetails/MovieDetails';
import './style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/' element={<Header />} /> {/*notFound */}
      </Routes>
      <Main />
      <Footer />
    </BrowserRouter>
  )
};

export default App;