import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMovieById, fetchVideoById } from '../../redux/asyncActions';
import { removeSelectedMovie, toggleMovieDetailsForm, removeFavoriteMovie, removeVideoList, setFavoriteMovie } from '../../redux/actions';
import Background from '../common/background/Background';
import SubmitButton from '../common/submitButton/SubmitButton';
import VideoModal from '../modals/videoModal/VideoModal';
import { ItemType, VideoItemType } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './MovieDetails.scss';

type ParamsIdType = {
  id: string
}

const MovieDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedByIdMovie, favoriteMovies, videos } = useTypedSelector((state) => state);
  const { id } = useParams<ParamsIdType>();
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchMovieById(id as string));
    dispatch(fetchVideoById(id as string));
    dispatch(toggleMovieDetailsForm(true));
  }, [id, dispatch]);

  const getVideo = (arr: Array<VideoItemType>): VideoItemType => {
    let item = arr.find(v => v.site === 'YOUTUBE');
    return item as VideoItemType;
  }

  const itemVideo = getVideo(videos);

  const isFavorite = (id: number) => favoriteMovies.some((item) => item.kinopoiskId === id);

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
      dispatch(removeFavoriteMovie(id));
    } else {
      dispatch(setFavoriteMovie(id));
    }
  }

  return (
    <>
      {showVideoModal && <VideoModal movie={selectedByIdMovie as ItemType} video={itemVideo as VideoItemType} handleVideoModal={handleVideoModal} />}

      <div className="movie__details">
        <Background />
        <div className="details">
          <div className="details__header">
            <Link to='/' className="details-search" type="button" onClick={handleCloseClick}></Link>
          </div>
          <div className="details__container">
            <div className="details__aside">
              <div className="details__image">
                <i className={`movie_icon-fav ${isFavorite(selectedByIdMovie?.kinopoiskId as number) ? 'active' : ''}`} onClick={() => handleFavoriteClick(selectedByIdMovie?.kinopoiskId as number)}></i>
                <img className="image-cover" src={selectedByIdMovie?.posterUrl || selectedByIdMovie?.posterUrlPreview} alt={selectedByIdMovie?.nameOriginal || selectedByIdMovie?.nameRu as string} />
              </div>
              <SubmitButton text='Video' isBusy={!itemVideo} handleClick={handleClick} />
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
