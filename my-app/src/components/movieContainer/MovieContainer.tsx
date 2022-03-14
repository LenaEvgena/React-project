import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesAPI } from '../../redux/asyncActions';
import { setCurrentPage } from '../../redux/actions';
import { createPages } from '../../utils/createPages';
import MovieCard from '../movieCard/MovieCard';
import ErrorPage from '../errorPage/ErrorPage';
import FavorContainer from './FavorContainer';
import { InitialStateType } from '../../types/types';
import './MovieContainer.scss';

const MovieContainer: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: InitialStateType) => state.movies.items);
  const total = useSelector((state: InitialStateType) => state.total);
  const totalCount = useSelector((state: InitialStateType) => state.totalCount);
  const currentPage = useSelector((state: InitialStateType) => state.currentPage);
  const sortType = useSelector((state: InitialStateType) => state.sortType);
  const isFetching = useSelector((state: InitialStateType) => state.isFetching);
  const isFetchedError = useSelector((state: InitialStateType) => state.isFetchedError);
  const isFavorListOpen = useSelector((state: InitialStateType) => state.isFavorListOpen);
  const pages: Array<number> = [];

  createPages(pages, total, currentPage);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getMoviesAPI(currentPage));
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
