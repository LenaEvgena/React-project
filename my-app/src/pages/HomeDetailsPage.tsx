import React from 'react'
import MovieDetailsContainer from '../components/movieDetails/MovieDetailsContainer';
import MovieContainer from '../components/main/movieContainer/MovieContainer';

const HomeDetailsPage: React.FC = () => {
  return (
    <>
      <MovieDetailsContainer />
      <MovieContainer />
    </>
  )
}

export default HomeDetailsPage;
