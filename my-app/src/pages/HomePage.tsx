import React from 'react'
import Main from '../components/main/Main';
import MoviesHeader from '../components/moviesHeader/MoviesHeader';

const HomePage: React.FC = () => {
  return (
    <>
      <MoviesHeader />
      <Main />
    </>
  )
}

export default HomePage;
