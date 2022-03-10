import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesAPI } from '../../redux/asyncActions';
import { setCurrentPage } from '../../redux/actions';
import { createPages } from '../../utils/createPages';
import MovieCard from '../movieCard/MovieCard';
import ErrorPage from '../errorPage/ErrorPage';
import './MovieContainer.scss';
import FavorContainer from './FavorContainer';

const MovieContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.items);
  const total = useSelector(state => state.total);
  const totalCount = useSelector(state => state.totalCount);
  const currentPage = useSelector(state => state.currentPage);
  const sortType = useSelector(state => state.sortType);
  const isFetching = useSelector(state => state.isFetching);
  const isFetchedError = useSelector(state => state.isFetchedError);
  const favoriteMovies = useSelector(state => state.favoriteMovies);
  const isFavorListOpen = useSelector(state => state.isFavorListOpen);
  const pages = [];

  createPages(pages, total, currentPage);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getMoviesAPI(currentPage, sortType));
  }, []);

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
