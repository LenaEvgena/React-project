import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { removeSelectedMovie, toggleMovieDetailsForm, removeVideoList } from '../../redux/actions';
import { fetchMovieById, fetchVideoById } from '../../redux/asyncActionsThunks';
import { MovieItemType, VideoItemType } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { deleteFavor, sendFavor } from '../../firebase';
import useAuth from '../../hooks/useAuth';
import MovieDetails from './MovieDetails';
import './MovieDetails.scss';

type ParamsIdType = {
  id: string
}

const MovieDetailsContainer: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const user = useAuth();
  const { selectedByIdMovie, favoriteList, videos, isFavorListOpen } = useTypedSelector((state) => state);
  const { id } = useParams<ParamsIdType>();
  let pathTo = isFavorListOpen ? `/favorite` : `/`;

  //выбираем youtube как источник видео
  const getVideo = (arr: Array<VideoItemType>): VideoItemType => {
    const item = arr.find(v => v.site === 'YOUTUBE');
    return item as VideoItemType;
  }

  const itemVideo = getVideo(videos);

  //проверяем, есть ли такой в избранных
  const isInFavorites = useMemo(
    () => favoriteList?.some((item) => item.films?.kinopoiskId === selectedByIdMovie?.kinopoiskId)
    , [favoriteList, selectedByIdMovie?.kinopoiskId]);

  const handleClick = (): void => {
    window.scroll(0, 0);
    setShowVideoModal(prevShowVideoModal => !prevShowVideoModal);
  };

  const handleCloseClick = (): void => {
    dispatch(toggleMovieDetailsForm(false));
    dispatch(removeSelectedMovie());
    dispatch(removeVideoList([]));
  };

  const handleFavoriteClick = (id: number): void => {
    if (isInFavorites) {
      deleteFavor(id, user);
    }
    else {
      sendFavor(id, user, selectedByIdMovie);
    }
  }

  //получаем инфо и видео выбранного фильма
  const getVideoInfo = useCallback(
    () => {
      dispatch(fetchMovieById(id || ''));
      dispatch(fetchVideoById(id || ''));
    },
    [id]
  );

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(toggleMovieDetailsForm(true));
    getVideoInfo();
  }, [getVideoInfo]);

  return (
    <MovieDetails
      showVideoModal={showVideoModal}
      selectedByIdMovie={selectedByIdMovie as MovieItemType}
      itemVideo={itemVideo}
      pathTo={pathTo}
      isInFavorites={isInFavorites}
      handleClick={handleClick}
      handleCloseClick={handleCloseClick}
      handleFavoriteClick={handleFavoriteClick} />
  );
}

export default MovieDetailsContainer;
