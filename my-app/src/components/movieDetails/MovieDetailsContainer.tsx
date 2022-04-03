import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { removeSelectedMovie, toggleMovieDetailsForm, removeVideoList } from '../../redux/actions';
import { fetchMovieById, fetchVideoById } from '../../redux/asyncActionsThunks';
import { ItemType, VideoItemType } from '../../types/types';
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
    let item = arr.find(v => v.site === 'YOUTUBE');
    return item as VideoItemType;
  }

  const itemVideo = useMemo(
    () => getVideo(videos)
    , [videos]
  );

  //проверяем, есть ли такой в избранных
  const isFavorite = useCallback( //
    (id: number) => {
      return favoriteList?.some((item) => item.films?.kinopoiskId === id);
    }, [favoriteList]
  );

  const isInFavorites = useMemo(
    () => isFavorite(selectedByIdMovie?.kinopoiskId as number)
    , [isFavorite, selectedByIdMovie]
  );

  const handleClick = (): void => {
    window.scroll(0, 0);
    setShowVideoModal(!showVideoModal);
  };

  const handleCloseClick = (): void => {
    dispatch(toggleMovieDetailsForm(false));
    dispatch(removeSelectedMovie());
    dispatch(removeVideoList([]));
  };

  const handleFavoriteClick = (id: number): void => {
    if (isFavorite(id)) {
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
    [dispatch, id]
  );

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(toggleMovieDetailsForm(true));
    getVideoInfo();
  }, [dispatch, getVideoInfo]);

  return (
    <MovieDetails
      showVideoModal={showVideoModal}
      selectedByIdMovie={selectedByIdMovie as ItemType}
      itemVideo={itemVideo}
      pathTo={pathTo}
      isInFavorites={isInFavorites}
      handleClick={handleClick}
      handleCloseClick={handleCloseClick}
      handleFavoriteClick={(id: number) => handleFavoriteClick(id)} />
  );
}

export default MovieDetailsContainer;
