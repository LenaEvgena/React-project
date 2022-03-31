import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Background from '../common/background/Background';
import VideoModal from '../modals/videoModal/VideoModal';
import DetailsMedia from './DetailsMedia';
import DetailsContent from './DetailsContent';
import { removeSelectedMovie, toggleMovieDetailsForm, removeVideoList } from '../../redux/actions';
import { fetchMovieById, fetchVideoById } from '../../redux/asyncActionsThunks';
import { ItemType, VideoItemType } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { deleteFavor, sendFavor } from '../../firebase';
import useAuth from '../../hooks/useAuth';
import './MovieDetails.scss';

type ParamsIdType = {
  id: string
}

const MovieDetails: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const user = useAuth();
  const { selectedByIdMovie, favoriteList, videos, isFavorListOpen } = useTypedSelector((state) => state);
  const { id } = useParams<ParamsIdType>();
  let pathTo = isFavorListOpen ? `/favorite` : `/`;

  const getVideo = (arr: Array<VideoItemType>): VideoItemType => {
    let item = arr.find(v => v.site === 'YOUTUBE');
    return item as VideoItemType;
  }

  const itemVideo = useMemo(
    () => getVideo(videos)
    , [videos]
  );

  const isFavorite = useCallback(
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
    <>
      {showVideoModal && <VideoModal movie={selectedByIdMovie as ItemType} video={itemVideo} handleVideoModal={handleClick} />}

      <div className="movie__details">
        <Background />
        <div className="details">
          <div className="details__header">
            <Link to={pathTo} className="details-search" type="button" onClick={handleCloseClick}></Link>
          </div>
          <div className="details__container">
            <DetailsMedia itemVideo={itemVideo} handleClick={handleClick} handleFavoriteClick={handleFavoriteClick} isInFavorites={isInFavorites} />
            <DetailsContent />
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
