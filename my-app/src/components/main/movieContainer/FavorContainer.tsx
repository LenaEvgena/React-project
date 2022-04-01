import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import useCollection from '../../../hooks/useCollection';
import MovieList, { Types } from '../movieList/MovieList';

const FavorContainer: React.FC = () => {
  const { loading } = useCollection();
  const { currentPage, sortType, isFetchedError, favoriteList } = useTypedSelector((state) => state);
  let count: number = favoriteList?.length;

  return (
    <MovieList
      type={Types.FavoriteMoviesType}
      total={count}
      currentPage={currentPage}
      sortType={sortType}
      isFetching={loading}
      isFetchedError={isFetchedError}
      favoriteList={favoriteList} />
  );
}

export default FavorContainer;
