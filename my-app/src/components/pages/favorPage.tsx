import React from 'react'
import FavorContainer from '../main/movieContainer/FavorContainer';
import MoviesHeader from '../main/moviesHeader/MoviesHeader';
import SortResultsHeader from '../main/resultsHeader/ResultsHeader';

const FavorPage = () => {
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

export default FavorPage
