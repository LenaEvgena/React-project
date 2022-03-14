import React from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesAPI } from '../../redux/asyncActions';
import { setCurrentPage } from '../../redux/actions';
import { createPages } from '../../utils/createPages';
import MovieCard from '../movieCard/MovieCard';
import ErrorPage from '../errorPage/ErrorPage';
import FavorContainer from './FavorContainer';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './MovieContainer.scss';

const MovieContainer: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector((state) => state.movies.items);
  const { total, totalCount, currentPage, sortType, isFetching, isFetchedError, isFavorListOpen } = useTypedSelector((state) => state);
  const pages: Array<number> = [];

  createPages(pages, total, currentPage);

  if (isFetchedError) {
    return <ErrorPage handleClick={() => dispatch(getMoviesAPI(currentPage, sortType))} text='Try again' />;
  }

  if (totalCount === 0) {
    return (
      <div className="movie__container">
        <div className="loading">No movies found</div>
      </div>
    )
  }

  if (isFavorListOpen) {
    return <FavorContainer />
  }

  return (
    <div className="movie__container">
      <div className="result">
        <span className="result__count">{totalCount}</span>
        <span> movies found</span>
      </div>

      <div className="pages">
        {pages.map((page, index) => <span
          className={currentPage === page ? "page active" : "page"}
          key={index}
          onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
      </div>

      {isFetching ? (
        <div className="loader">
          <div className="loader_image"></div>
          <div className="loading">Loading...</div>
        </div>) :
        <div className="container">
          {movies.map(movie => (
            <MovieCard
              data={movie}
              key={movie.kinopoiskId}
            />)
          )}
        </div>
      }
    </div>
  )
}

export default MovieContainer;
