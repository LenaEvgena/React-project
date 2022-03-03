import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import SortResultsHeader from '../resultsHeader/ResultsHeader';
import MovieContainer from '../movieContainer/MovieContainer';
import './Main.scss';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const Main = () => {
  const isFetchedError = useSelector(state => state.isFetchedError);

  return (
    <>
      {isFetchedError ? <Navigate to="/error" /> :
        <main className="main">
          <SortResultsHeader />
          <ErrorBoundary>
            <MovieContainer />
          </ErrorBoundary>
        </main>
      }
    </>
  )
};

export default Main;
