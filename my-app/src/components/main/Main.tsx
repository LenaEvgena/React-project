import React from 'react';
import SortResultsHeader from './../main/resultsHeader/ResultsHeader';
import MovieContainer from './../main/movieContainer/MovieContainer';
import ErrorBoundary from './../common/errorBoundary/ErrorBoundary';
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
