import React, { useState, useEffect } from 'react';
import MovieCard from '../movieCard/MovieCard';
import './MovieContainer.scss';
import moviesList from '../../moviesData/movies';

const MovieContainer = () => {
  const [showOptions, setShowOptions] = useState({});
  const [movies, setMovies] = useState([]);

  const handleOpenClick = (event, id) => {
    const item = movies.filter((movie) => movie.id === id)[0]; // данные одного выбранного фильма
    event.stopPropagation();
    setShowOptions((item.id === id) ? { [item.id]: true } : null);
  }

  const handleCloseClick = () => {
    setShowOptions(movies.map((movie) => ({ [movie.id]: false })));
  }

  useEffect(() => {
    setMovies([...moviesList]);
    document.addEventListener('click', handleCloseClick);
    return () => {
      document.removeEventListener('click', handleCloseClick);
    }
  }, []);

  return (
    <div className="movie__container">
      <div className="result">
        <span className="result__count">39</span>
        <span> movies found</span>
      </div>

      <div className="container">
        {movies.map(movie => (
          <MovieCard
            data={movie}
            key={movie.id}
            showOptions={showOptions[movie.id]}
            handleClick={handleOpenClick} />
        ))}
      </div>
    </div>
  );
}

export default MovieContainer;
