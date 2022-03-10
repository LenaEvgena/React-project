import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../movieCard/MovieCard';
import './MovieContainer.scss';

const FavorContainer = () => {
  const favoriteMovies = useSelector(state => state.favoriteMovies);
  let count = favoriteMovies.length;

  if (count === 0) {
    return (
      <div className="movie__container">
        <div className="loading">No movies found</div>
      </div>
    )
  }

  return (
    <div className="movie__container">
      <div className="result">
        <span className="result__count">{count}</span>
        <span> movies found</span>
      </div>

      <div className="container">
        {favoriteMovies.map(movie => (
          <MovieCard
            data={movie}
            key={movie.kinopoiskId}
          />))
        }
      </div>
    </div>
  );
}

export default FavorContainer;
