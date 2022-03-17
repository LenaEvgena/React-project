import React from 'react';
import ErrorBoundary from '../common/errorBoundary/ErrorBoundary';
import SortResultsHeader from './resultsHeader/ResultsHeader';
import MovieContainer from './movieContainer/MovieContainer';
import './Main.scss';

const Main: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <main className="main">
          <SortResultsHeader />
          <MovieContainer />
        </main>
      </ErrorBoundary>
    </>
  )
};

export default Main;
