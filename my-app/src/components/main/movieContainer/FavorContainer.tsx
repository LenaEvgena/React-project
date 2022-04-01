import React, { useEffect, useRef } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import useCollection from '../../../hooks/useCollection';
import MovieList, { Types } from '../movieList/MovieList';

const FavorContainer: React.FC = () => {
  const { loading } = useCollection();
  const { isFetchedError, favoriteList } = useTypedSelector((state) => state);
  let count: number = favoriteList?.length;
  let mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    console.log('favor mounted');
    return () => {
      console.log('favor unmounted');
      mountedRef.current = false;
    }
  }, [mountedRef]);

  return (
    <MovieList
      type={Types.FavoriteMoviesType}
      total={count}
      isFetching={loading}
      isFetchedError={isFetchedError}
      favoriteList={favoriteList}
      refer={mountedRef.current} />
  );
}

export default FavorContainer;
