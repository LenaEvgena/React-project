import React, { useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import MovieCard from '../movieCard/MovieCard';
import Loader from '../../common/loader/Loader';
import { collection } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore, auth } from '../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setFavoriteMovieList } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import './MovieContainer.scss';

const FavorContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [user]: any = useAuthState(auth);
  const { favoriteList } = useTypedSelector((state) => state);
  let count: number = favoriteList?.length;
  const [favorites, loading]: Array<any> = useCollectionData(collection(firestore, user?.email || 'favorites')); //получение данных из store

  useEffect(() => {
    dispatch(setFavoriteMovieList(favorites));
  }, [favorites])

  if (loading) {
    return <Loader />
  }

  if (!count || count === 0) {
    return (
      <div className="movie__container">
        <div className="loading">No movies found</div>
      </div>
    )
  }

  return (
    <main className="main">
      <div className="movie__container">
        <div className="result">
          <span className="result__count">{count}</span>
          <span> movies found</span>
        </div>
        <div className="container">
          {favoriteList && favoriteList.map((f: any) => (
            <MovieCard
              favorList={favorites}
              data={f.films}
              key={f.films.kinopoiskId}
            />))
          }
        </div>
      </div>
    </main>
  );
}

export default FavorContainer;
