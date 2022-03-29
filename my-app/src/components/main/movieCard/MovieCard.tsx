import React, { useCallback, useMemo } from 'react';
import { FavoriteMoviesType, ItemType } from '../../../types/types';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import DeleteModal from '../../modals/deleteModal/DeleteModal';
import CardMedia from './CardMedia';
import CardContent from './CardContent';
import { deleteFavor, sendFavor } from '../../../firebase';
import useAuth from '../../../hooks/useAuth';
import './MovieCard.scss';

type PropsType = {
  data: ItemType,
  favorList: Array<FavoriteMoviesType>
}

const MovieCard: React.FC<PropsType> = ({ data, favorList }) => {
  const user = useAuth();
  const { isDeleteFormOpen, isFavorListOpen } = useTypedSelector(state => state);
  let path = isFavorListOpen ? `/favorite/movie/${data.kinopoiskId}` : `/movie/${data.kinopoiskId}`;

  const isFavorite = useCallback(
    (id: number) => {
      return favorList?.some((item) => item.films?.kinopoiskId === id);
    }, [favorList])

  const isInFavorites = useMemo(
    () => isFavorite(data.kinopoiskId as number)
    , [isFavorite, data.kinopoiskId]);

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
