import React, { useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import MovieCard from '../movieCard/MovieCard';
import { collection } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore, auth } from '../../../firebase';

import './MovieContainer.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setFavoriteMovie } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const FavorContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [user]: any = useAuthState(auth);
  const { favoriteMovies } = useTypedSelector((state) => state);
  let count: number = favoriteMovies.length;

  const [favorites]: Array<any> = useCollectionData(collection(firestore, user.email));
  console.log("db", favorites);

  useEffect(() => {
    favorites && favorites.map((f: any) => dispatch(setFavoriteMovie(f.films.kinopoiskId)));
  }, [favorites])

  if (!favorites) {
    return (
      <div className="movie__container">
        <div className="loading">No movies found</div>
      </div>
    )
  }
  if (count === 0) {
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
          {favorites && favorites.map((f: any) => (
            <MovieCard
              data={f.films}
              key={f.films.kinopoiskId}
            />))
          }
          {/* {favoriteMovies.map(movie => (
            <MovieCard
              data={movie}
              key={movie.kinopoiskId}
            />))
          } */}
        </div>
      </div>
    </main>
  );
}

export default FavorContainer;
