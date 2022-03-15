import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import MovieCard from '../movieCard/MovieCard';
import './MovieContainer.scss';

const FavorContainer: React.FC = () => {
  const favoriteMovies = useTypedSelector((state) => state.favoriteMovies);
  let count: number = favoriteMovies.length;

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
