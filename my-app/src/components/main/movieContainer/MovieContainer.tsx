import React, { useEffect, useRef } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ItemType } from '../../../types/types';
import Pages from '../../common/pages/Pages';
import MovieList, { Types } from '../movieList/MovieList';

type PropsType = {
  movies: ItemType[],
}

const MovieContainer: React.FC<PropsType> = ({ movies }) => {
  const { total, currentPage, sortType, isFetching, isFetchedError, favoriteList } = useTypedSelector((state) => state);
  let mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    }
  });

  return (
    // <h1></h1>
    <MovieList
      type={Types.ItemType}
      movies={movies}
      total={total}
      currentPage={currentPage}
      sortType={sortType}
      isFetching={isFetching}
      isFetchedError={isFetchedError}
      favoriteList={favoriteList}
      refer={mountedRef.current}
    >
      <Pages />
    </MovieList>
  )
}

export default MovieContainer;
