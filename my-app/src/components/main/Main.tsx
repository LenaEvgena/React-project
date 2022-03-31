import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import ErrorBoundary from '../common/errorBoundary/ErrorBoundary';
import MovieContainer from './movieContainer/MovieContainer';
import useAuth from '../../hooks/useAuth';
import MoviesHeader from '../moviesHeader/MoviesHeader';
import FavorContainer from './movieContainer/FavorContainer';
import './Main.scss';

const Main: React.FC = () => {
  const user = useAuth();

  return (
    <>
      <ErrorBoundary>
        <MoviesHeader />
        <Routes>
          <Route >
            <Route path='/' element={<MovieContainer />} />
            {user && <Route path='/favorite' element={<FavorContainer />} />}
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  )
};

export default Main;
