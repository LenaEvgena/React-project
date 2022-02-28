import React from 'react';
import SortResultsHeader from '../resultsHeader/ResultsHeader';
import MovieContainer from '../movieContainer/MovieContainer';
import './Main.scss';

const Main = () => (
  <main className="main">
    <SortResultsHeader />
    <MovieContainer />
  </main>
);

export default Main;
