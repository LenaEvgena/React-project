import React from 'react'
import FavorContainer from '../main/movieContainer/FavorContainer';
import MoviesHeader from '../moviesHeader/MoviesHeader';
import SortResultsHeader from '../main/resultsHeader/ResultsHeader';

const FavorPage: React.FC = () => {
  return (
    <>
      <main className="main">
        <MoviesHeader />
        <SortResultsHeader />
        <FavorContainer />
      </main>
    </>
  )
}

export default FavorPage;
