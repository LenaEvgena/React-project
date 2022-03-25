import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import MovieCard from '../movieCard/MovieCard';
import Loader from '../../common/loader/Loader';
import { collection } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore, auth } from '../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SortResultsHeader from '../../main/resultsHeader/ResultsHeader';
import { FavoriteMoviesType, UserImplType } from '../../../types/types';
import './MovieContainer.scss';

const FavorContainer: React.FC = () => {
  const [user] = useAuthState(auth) as UserImplType[];
  const { favoriteList } = useTypedSelector((state) => state);
  let count: number = favoriteList?.length;
  const [_, loading] = useCollectionData(collection(firestore, user.email || 'favorites')); //получение данных из firestore

  return (
    <>
      <main className="main">
        <SortResultsHeader />

        {loading && <Loader />}

        {!count ?

          <div className="movie__container">
            <div className="loading">No movies found</div>
          </div> :

          <div className="movie__container">
            <div className="result">
              <span className="result__count">{count}</span>
              <span> movies found</span>
            </div>
            <div className="container">
              {favoriteList && favoriteList.map((f: FavoriteMoviesType) => (
                <MovieCard
                  favorList={favoriteList}
                  data={f.films}
                  key={f.films.kinopoiskId}
                />))
              }
            </div>
          </div>}
      </main>
    </>
  );
}

export default FavorContainer;
