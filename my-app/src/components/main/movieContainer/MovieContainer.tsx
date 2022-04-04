import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { MovieItemType } from '../../../types/types';
import Pages from '../../common/pages/Pages';
import MovieList, { Types } from '../movieList/MovieList';

type PropsType = {
  movies: MovieItemType[],
}

const MovieContainer: React.FC<PropsType> = ({ movies }) => {
  const { total, currentPage, sortType, isFetching, isFetchedError, favoriteList } = useTypedSelector((state) => state);

  return (
    <MovieList
      type={Types.MovieItemType}
      movies={movies}
      total={total}
      currentPage={currentPage}
      sortType={sortType}
      isFetching={isFetching}
      isFetchedError={isFetchedError}
      favoriteList={favoriteList}
    >
      <Pages />
    </MovieList>
  )
}

export default MovieContainer;
