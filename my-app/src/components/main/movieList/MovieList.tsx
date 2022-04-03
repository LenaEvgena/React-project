import React from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesAPI } from '../../../redux/asyncActionsThunks';
import ErrorPage from '../../errorPage/ErrorPage';
import MovieCard from '../movieCard/MovieCard';
import Loader from '../../common/loader/Loader';
import SortResultsHeader from '../resultsHeader/ResultsHeader';
import ErrorBoundary from '../../common/errorBoundary/ErrorBoundary';
import { ItemType, FavoriteMoviesType } from '../../../types/types';
import './MovieList.scss';

export enum Types {
  ItemType = 0,
  FavoriteMoviesType = 1,
}

type PropsType = {
  type: Types,
  movies?: ItemType[],
  total: number,
  currentPage?: number,
  sortType?: string,
  isFetching: boolean,
  isFetchedError: boolean,
  favoriteList: FavoriteMoviesType[],
  refer: boolean
}

const MovieList: React.FC<PropsType> = ({ refer, type, movies, total, currentPage, sortType, isFetching, isFetchedError, favoriteList, children }) => {
  const dispatch = useDispatch();

  if (isFetchedError) {
    return <ErrorPage handleClick={() => dispatch(getMoviesAPI(refer, currentPage || 1, sortType))} text='Try again' />;
  }

  return (
    <ErrorBoundary>
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

              {children}

              {isFetching ?
                <Loader /> :
                <div className="container">
                  {type === Types.ItemType ?
                    movies!.map(movie => (
                      <MovieCard
                        favoriteList={favoriteList}
                        data={movie}
                        key={movie.kinopoiskId}
                      />)) :
                    favoriteList.map((f) => (
                      <MovieCard
                        favoriteList={favoriteList}
                        data={f.films}
                        key={f.films.kinopoiskId}
                      />))
                  }
                </div>
              }
            </>
          }
        </div>
      </main>
    </ErrorBoundary>
  )
}

export default MovieList;
