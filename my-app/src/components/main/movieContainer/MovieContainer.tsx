import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { setCurrentPage } from '../../../redux/actions';
import { getMoviesAPI } from '../../../redux/asyncActionsThunks';
import { createPages } from '../../../utils/createPages';
import ErrorPage from '../../errorPage/ErrorPage';
import MovieCard from '../movieCard/MovieCard';
import Loader from '../../common/loader/Loader';
import './MovieContainer.scss';

const MovieContainer: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector((state) => state.movies.items);
  const { keyword, filter, total, totalCount, currentPage, sortType, isFetching, isFetchedError, favoriteList } = useTypedSelector((state) => state);
  const pages: Array<number> = [];

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getMoviesAPI(currentPage, sortType, filter, keyword));
  }, [currentPage, filter, sortType]);

  createPages(pages, total, currentPage);

  if (isFetchedError) {
    return <ErrorPage handleClick={() => dispatch(getMoviesAPI(currentPage, sortType))} text='Try again' />;
  }

  return (
    <div className="movie__container">

      {totalCount === 0 && !isFetching ?

        <div className="movie__container">
          <div className="loading noresult">No movies found</div>
        </div> :

        <>
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

          {isFetching ?
            <Loader /> :
            <div className="container">
              {movies.map(movie => (
                <MovieCard
                  favorList={favoriteList}
                  data={movie}
                  key={movie.kinopoiskId}
                />)
              )}
            </div>
          }
        </>

      }
    </div>
  )
}

export default MovieContainer;
