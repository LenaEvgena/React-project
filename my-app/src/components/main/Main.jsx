import React from 'react';
import SortResultsHeader from '../resultsHeader/ResultsHeader';
import MovieContainer from '../movieContainer/MovieContainer';
import './Main.scss';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const Main = () => (
  <main className="main">
    <SortResultsHeader />
    <ErrorBoundary>
      <MovieContainer />
    </ErrorBoundary>
  </main>
);

export default Main;
