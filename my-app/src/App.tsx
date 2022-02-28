import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import MovieDetails from './components/movieDetails/MovieDetails';
import './style.scss';


const App = () => {
  const [currentId, setCurrentId] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const setId = (e: any) => {
    if (!e.target.id) return;
    setCurrentId(e.target.id);
    setShowDetails(true);
  }

  useEffect(() => {
    document.addEventListener('click', setId);
    return () => {
      document.removeEventListener('click', setId);
    }
  });


  return (
    <>
      <ErrorBoundary>

        {(showDetails && <MovieDetails movieId={currentId} handleClick={handleClick} />) || <Header />}

      </ErrorBoundary>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
      <Footer />
    </>
  )
};

export default App;