import React from 'react';
import SortResultsHeader from '../resultsHeader/ResultsHeader';
import MovieContainer from '../movieContainer/MovieContainer';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import './Main.scss';

const Main: React.FC = () => (
  <main className="main">
    <SortResultsHeader />
    <ErrorBoundary>
      <MovieContainer />
    </ErrorBoundary>
  </main>
);

export default Main;
