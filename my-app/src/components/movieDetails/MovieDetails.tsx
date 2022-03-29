import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
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
  const itemVideo = getVideo(videos);

  const isFavorite = (id: number) => favoriteList?.some((item) => item.films?.kinopoiskId === id);
  let cls = classNames('movie_icon-fav', { 'active': isFavorite(selectedByIdMovie?.kinopoiskId as number) });

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

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(toggleMovieDetailsForm(true));
    dispatch(fetchMovieById(id as string));
    dispatch(fetchVideoById(id as string));
  }, [dispatch, id]);

  return (
    <>
      {showVideoModal && <VideoModal movie={selectedByIdMovie as ItemType} video={itemVideo as VideoItemType} handleVideoModal={handleClick} />}

      <div className="movie__details">
        <Background />
        <div className="details">
          <div className="details__header">
            <Link to={pathTo} className="details-search" type="button" onClick={handleCloseClick}></Link>
          </div>
          <div className="details__container">
            <DetailsMedia itemVideo={itemVideo} handleClick={handleClick} handleFavoriteClick={handleFavoriteClick} cls={cls} />
            <DetailsContent />
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
