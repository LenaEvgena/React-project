import React from 'react'
import FavorContainer from '../components/main/movieContainer/FavorContainer';
import MoviesHeader from '../components/moviesHeader/MoviesHeader';

const FavoritePage: React.FC = () => {
  return (
    <>
      <MoviesHeader />
      <FavorContainer />
    </>
  )
}

export default FavoritePage;
