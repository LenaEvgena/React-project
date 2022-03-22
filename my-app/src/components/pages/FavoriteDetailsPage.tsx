import React from 'react'
import MovieDetails from '../movieDetails/MovieDetails';
import FavorContainer from '../main/movieContainer/FavorContainer';

const FavoriteDetailsPage: React.FC = () => {
  return (
    <>
      <MovieDetails />
      <div className="results-header_line"></div>
      <FavorContainer/>
    </>
  )
}

export default FavoriteDetailsPage;
