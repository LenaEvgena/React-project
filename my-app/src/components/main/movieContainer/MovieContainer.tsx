import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { setCurrentPage } from '../../../redux/actions';
import { getMoviesAPI } from '../../../redux/asyncActionsThunks';
import { createPages } from '../../../utils/createPages';
import classNames from 'classnames';
import ErrorPage from '../../errorPage/ErrorPage';
import MovieCard from '../movieCard/MovieCard';
import Loader from '../../common/loader/Loader';
import SortResultsHeader from '../../main/resultsHeader/ResultsHeader';
import './MovieContainer.scss';

const MovieContainer: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector((state) => state.movies.items);
  const { keyword, filter, total, totalPages, currentPage, sortType, isFetching, isFetchedError, favoriteList } = useTypedSelector((state) => state);
  let clsPages = classNames('page', { 'busy': isFetching });
  const pages: Array<number> = [];
  const mountedRef: React.MutableRefObject<boolean> = useRef(true);

  createPages(pages, totalPages, currentPage);

  const fetchMovie = useCallback(
    () => {
      dispatch(getMoviesAPI(mountedRef.current, currentPage, sortType, filter, keyword))
    }, [mountedRef, dispatch, currentPage, filter, sortType, keyword]);

  useEffect(() => {
    console.log('MovieContainer mounted');

    window.scroll(0, 0);
    fetchMovie();
    return () => {
      console.log('MovieContainer unmounted');
      mountedRef.current = false;
    }
  }, [fetchMovie]);

  if (isFetchedError) {
    return <ErrorPage handleClick={() => dispatch(getMoviesAPI(mountedRef.current, currentPage, sortType))} text='Try again' />;
  }

  return (
    <main className="main">
      <SortResultsHeader />

      <div className="movie__container">

        {total === 0 && !isFetching ?
          <div className="movie__container">
            <div className="loading noresult">No movies found</div>
          </div> :
          <>
            <div className="result">
              <span className="result__count">{total}</span>
              <span> movies found</span>
            </div>
            <div className="pages">
              {pages.map((page, index) => <span
                className={currentPage === page ? `${clsPages} active` : clsPages}
                key={index}
                onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>

            {isFetching ?
              <Loader /> :
              <div className="container">
                {movies.map(movie => (
                  <MovieCard
                    favorList={favoriteList}
                    data={movie}
                    key={movie.kinopoiskId}
                  />))
                }
              </div>
            }
          </>
        }
      </div>
    </main>
  )
}

export default MovieContainer;
