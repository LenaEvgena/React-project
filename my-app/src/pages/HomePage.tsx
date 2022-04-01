import React from 'react'
import MovieContainer from '../components/main/movieContainer/MovieContainer';
import MoviesHeader from '../components/moviesHeader/MoviesHeader';

const HomePage: React.FC = () => {
  return (
    <>
      <MoviesHeader />
      <MovieContainer />
    </>
  )
}

export default HomePage;
