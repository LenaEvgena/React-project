import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import useCollection from '../../../hooks/useCollection';
import MovieList, { Types } from '../movieList/MovieList';

const FavorContainer: React.FC = () => {
  const { loading } = useCollection();
  const { isFetchedError, favoriteList } = useTypedSelector((state) => state);
  const count: number = favoriteList.length;

  return (
    <MovieList
      type={Types.FavoriteMoviesType}
      total={count}
      isFetching={loading}
      isFetchedError={isFetchedError}
      favoriteList={favoriteList}
    />
  );
}

export default FavorContainer;
