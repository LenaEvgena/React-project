import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { setCurrentPage } from '../../../redux/actions';
import { getMoviesAPI } from '../../../redux/asyncActions';
import { createPages } from '../../../utils/createPages';
import ErrorPage from '../../errorPage/ErrorPage';
import MovieCard from '../movieCard/MovieCard';
import './MovieContainer.scss';

const MovieContainer: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector((state) => state.movies.items);
  const { keyword, filter, total, totalCount, currentPage, sortType, isFetching, isFetchedError } = useTypedSelector((state) => state);
  const pages: Array<number> = [];

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getMoviesAPI(currentPage, sortType, filter, keyword));
  }, [currentPage, filter, sortType]);

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
