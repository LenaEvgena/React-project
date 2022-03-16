import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import MovieDetails from './components/movieDetails/MovieDetails';
import ErrorPage from './components/errorPage/ErrorPage';
import ScrollButton from './components/common/scrollButton/ScrollButton';
import './style.scss';


// const  HeaderWitnMain = () => {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   )
// }

// const  DetailsWitnMain = () => {
//   return (
//     <>
//       <MovieDetails />
//       <Main />
//       <Footer />
//     </>
//   )
// }


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Main />
      <ScrollButton />
    </BrowserRouter>
  )
};

export default App;
