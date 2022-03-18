import React from 'react'
import MovieDetails from '../movieDetails/MovieDetails';
import FavorContainer from '../main/movieContainer/FavorContainer';

const FavoriteDetailsPage: React.FC = () => {
  return (
    <>
      <MovieDetails />
      <FavorContainer/>
    </>
  )
}

export default FavoriteDetailsPage;
