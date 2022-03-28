import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Background from '../common/background/Background';
import VideoModal from '../modals/videoModal/VideoModal';
import Button from '../common/button/Button';
import { removeSelectedMovie, toggleMovieDetailsForm, removeVideoList } from '../../redux/actions';
import { fetchMovieById, fetchVideoById } from '../../redux/asyncActionsThunks';
import { ItemType, VideoItemType } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { deleteFavor, sendFavor } from '../../firebase';
import classNames from 'classnames';
import useAuth from '../../hooks/useAuth';
import './MovieDetails.scss';

type ParamsIdType = {
  id: string
}

const MovieDetails: React.FC = () => {
  const dispatch = useDispatch();
  const user = useAuth();
  const { selectedByIdMovie, favoriteList, videos, isFavorListOpen } = useTypedSelector((state) => state);
  const { id } = useParams<ParamsIdType>();
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  let pathTo = isFavorListOpen ? `/favorite` : `/`;

  const getVideo = (arr: Array<VideoItemType>): VideoItemType => {
    let item = arr.find(v => v.site === 'YOUTUBE');
    return item as VideoItemType;
  }
  const itemVideo = getVideo(videos);

  const isFavorite = (id: number) => favoriteList?.some((item) => item.films?.kinopoiskId === id);
  let cls = classNames('movie_icon-fav', { 'active': isFavorite(selectedByIdMovie?.kinopoiskId as number) });

  const handleVideoModal = (): void => {
    setShowVideoModal(!showVideoModal);
  };

  const handleClick = (): void => {
    window.scroll(0, 0);
    handleVideoModal();
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
    dispatch(fetchMovieById(id as string));
    dispatch(fetchVideoById(id as string));
    dispatch(toggleMovieDetailsForm(true));
  }, [id]);

  return (
    <>
      {showVideoModal && <VideoModal movie={selectedByIdMovie as ItemType} video={itemVideo as VideoItemType} handleVideoModal={handleVideoModal} />}

      <div className="movie__details">
        <Background />
        <div className="details">
          <div className="details__header">
            <Link to={pathTo} className="details-search" type="button" onClick={handleCloseClick}></Link>
          </div>
          <div className="details__container">
            <div className="details__aside">
              <div className="details__image">
                <i className={cls} onClick={() => handleFavoriteClick(selectedByIdMovie?.kinopoiskId as number)}></i>
                <img className="image-cover" src={selectedByIdMovie?.posterUrl || selectedByIdMovie?.posterUrlPreview} alt={selectedByIdMovie?.nameOriginal || selectedByIdMovie?.nameRu as string} />
              </div>
              <Button className='submit__button' type='button' text='Video' isBusy={!itemVideo} handleClick={handleClick} />
            </div>

            <div className="details__content">
              <div className="content-title">
                <h2 className="content-movie_title">
                  {selectedByIdMovie?.nameOriginal || selectedByIdMovie?.nameRu}
                </h2>
                <div className="content-vote_average">
                  {selectedByIdMovie?.ratingKinopoisk}
                </div>
              </div>

              <div className="content-tagline">
                {selectedByIdMovie?.slogan || selectedByIdMovie?.nameRu}
                <div>{selectedByIdMovie?.shortDescription}</div>
              </div>

              <div className="content-info">
                <span className="content-info_date">
                  {selectedByIdMovie?.year}
                </span>
                <span className="content-info_runtime">
                  {selectedByIdMovie?.serial ? `${selectedByIdMovie?.filmLength || 1} series` : `${selectedByIdMovie?.filmLength || 90} min`}
                </span>
              </div>

              <div className="content-overview">
                {selectedByIdMovie?.description || 'Описание фильма временно не доступно'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
