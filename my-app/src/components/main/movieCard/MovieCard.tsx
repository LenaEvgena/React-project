import React, { useMemo } from 'react';
import { FavoriteMoviesType, MovieItemType } from '../../../types/types';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import DeleteModal from '../../modals/deleteModal/DeleteModal';
import CardMedia from './CardMedia';
import CardContent from './CardContent';
import { deleteFavor, sendFavor } from '../../../firebase';
import useAuth from '../../../hooks/useAuth';
import './MovieCard.scss';

type PropsType = {
  data: MovieItemType,
  favoriteList: Array<FavoriteMoviesType>
}

const MovieCard: React.FC<PropsType> = ({ data, favoriteList }) => {
  const user = useAuth();
  const { isDeleteFormOpen, isFavorListOpen } = useTypedSelector(state => state);
  const path = isFavorListOpen ? `/favorite/movie/${data.kinopoiskId}` : `/movie/${data.kinopoiskId}`;

  const isInFavorites = useMemo(
    () => favoriteList?.some((item) => item.films?.kinopoiskId === data.kinopoiskId)
    , [favoriteList, data.kinopoiskId]);

  const handleFavoriteClick = (id: number): void => {
    if (!user) return;
    if (isInFavorites) {
      deleteFavor(id, user);
    }
    else {
      sendFavor(id, user, data);
    }
  }

  return (
    <div className="movie">
      <CardMedia data={data} handleFavoriteClick={handleFavoriteClick} isFavoriteMovie={isInFavorites} path={path} />
      <CardContent data={data} path={path} />
      {isDeleteFormOpen && <DeleteModal />}
    </div>
  );
}

export default MovieCard;
