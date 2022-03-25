import React from 'react'
import FavorContainer from '../components/main/movieContainer/FavorContainer';
import MoviesHeader from '../components/moviesHeader/MoviesHeader';

const FavorPage: React.FC = () => {
  return (
    <>
      <MoviesHeader />
      <FavorContainer />
    </>
  )
}

export default FavorPage;
