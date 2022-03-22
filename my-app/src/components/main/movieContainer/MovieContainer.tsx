import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { setCurrentPage, setAuthName, setFavoriteMovieList } from '../../../redux/actions';
import { getMoviesAPI } from '../../../redux/asyncActionsThunks';
import { createPages } from '../../../utils/createPages';
import ErrorPage from '../../errorPage/ErrorPage';
import MovieCard from '../movieCard/MovieCard';
import Loader from '../../common/loader/Loader';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import './MovieContainer.scss';

const MovieContainer: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector((state) => state.movies.items);
  const { keyword, filter, total, totalCount, currentPage, sortType, isFetching, isFetchedError, favoriteList } = useTypedSelector((state) => state);
  const pages: Array<number> = [];
  const { userName } = useTypedSelector((state) => state);
  const [user]: any = useAuthState(auth);
  const [favorites]: Array<any> = useCollectionData(collection(firestore, user?.email || 'favorites')); //получение данных из firestore

  useEffect(() => {
    if (user && !userName) {
      dispatch(setAuthName(user?.email))
    };
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getMoviesAPI(currentPage, sortType, filter, keyword));
  }, [currentPage, filter, sortType]);

  useEffect(() => {
    if (user) {
      dispatch(setFavoriteMovieList(favorites));
    }
  }, [favorites]);

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
    </div>
  )
}

export default MovieContainer;
