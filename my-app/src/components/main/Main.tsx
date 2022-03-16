import React from 'react';
import SortResultsHeader from './../main/resultsHeader/ResultsHeader';
import MovieContainer from './../main/movieContainer/MovieContainer';
import ErrorBoundary from './../common/errorBoundary/ErrorBoundary';
import './Main.scss';
import Footer from '../common/footer/Footer';
import MoviesHeader from '../header/MoviesHeader';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Main: React.FC = () => {
  const { areDetailsOpen } = useTypedSelector(state => state);
  return (
    <>
      {areDetailsOpen || <MoviesHeader />}
      <main className="main">
        <SortResultsHeader />
        <ErrorBoundary>
          <MovieContainer />
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  )
};

export default Main;
