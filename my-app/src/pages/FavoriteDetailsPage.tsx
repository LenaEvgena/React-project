import React from 'react'
import MovieDetails from '../components/movieDetails/MovieDetails';
import FavorContainer from '../components/main/movieContainer/FavorContainer';

const FavoriteDetailsPage: React.FC = () => {
  return (
    <>
      <MovieDetails />
      <FavorContainer/>
    </>
  )
}

export default FavoriteDetailsPage;
