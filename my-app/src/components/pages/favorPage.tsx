import React from 'react'
import FavorContainer from '../main/movieContainer/FavorContainer';
import MoviesHeader from '../moviesHeader/MoviesHeader';

const FavorPage: React.FC = () => {
  return (
    <>
      <MoviesHeader />
      <FavorContainer />
    </>
  )
}

export default FavorPage;
