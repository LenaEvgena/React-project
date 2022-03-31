import React from 'react'
import MovieDetailsContainer from '../components/movieDetails/MovieDetailsContainer';
import FavorContainer from '../components/main/movieContainer/FavorContainer';

const FavoriteDetailsPage: React.FC = () => {
  return (
    <>
      <MovieDetailsContainer />
      <FavorContainer/>
    </>
  )
}

export default FavoriteDetailsPage;
