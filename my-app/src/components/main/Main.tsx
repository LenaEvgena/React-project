import React from 'react';
import ErrorBoundary from '../common/errorBoundary/ErrorBoundary';
import MovieContainer from './movieContainer/MovieContainer';
import './Main.scss';

const Main: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <MovieContainer />
      </ErrorBoundary>
    </>
  )
};

export default Main;
