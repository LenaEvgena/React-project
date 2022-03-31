import React from 'react'
import Main from '../components/main/Main';
import MoviesHeader from '../components/moviesHeader/MoviesHeader';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import useAuth from '../hooks/useAuth';
import FavorContainer from '../components/main/movieContainer/FavorContainer';

const HomePage: React.FC = () => {
  const user = useAuth();

  return (
    <>
      <MoviesHeader />
      <Routes>
        <Route >
          <Route path='/' element={<Main />} />
          {user && <Route path='/favorite' element={<FavorContainer />} />}
        </Route>
      </Routes>
    </>
  )
}

export default HomePage;
