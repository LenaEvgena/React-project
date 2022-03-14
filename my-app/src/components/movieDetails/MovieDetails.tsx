import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieById, fetchVideoById } from '../../redux/asyncActions';
import { closeMovieDetailsForm, removeFavoriteMovie, setFavoriteMovie } from '../../redux/actions';
import Background from '../background/Background';
import LogoTitle from '../logoTitle/LogoTitle';
import SubmitButton from '../submitButton/SubmitButton';
import VideoModal from '../videoModal/VideoModal';
import { InitialStateType, ItemType, VideoItemType } from '../../types/types';
import './MovieDetails.scss';

type ParamsIdType = {
  id: string
}

const MovieDetails: React.FC = () => {
  const dispatch = useDispatch();
  const item = useSelector((state: InitialStateType) => state.selectedByIdMovie);
  const favoriteMovies = useSelector((state: InitialStateType) => state.favoriteMovies);
  const videos = useSelector((state: InitialStateType) => state.videos);
  const { id } = useParams<ParamsIdType>();
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchMovieById(id as string));
    dispatch(fetchVideoById(id as string));
  }, [id]);

  const getVideo = (arr: Array<VideoItemType>): VideoItemType  => {
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

  const handleFavoriteClick = (id: number): void => {
    if (isFavorite(id)) {
      dispatch(removeFavoriteMovie(id));
    } else {
      dispatch(setFavoriteMovie(id));
    }
  }

  return (
    <>
      {showVideoModal && <VideoModal movie={item as ItemType} video={itemVideo as VideoItemType} handleVideoModal={handleVideoModal} />}

      <div className="movie__details">
        <Background />
        <div className="details">
          <div className="details__header">
            <LogoTitle />
            <Link to='/' className="details-search" type="button" onClick={() => dispatch(closeMovieDetailsForm())}></Link>
          </div>
          <div className="details__container">
            <div className="details__aside">
              <div className="details__image">
                <i className={`movie_icon-fav ${isFavorite(item?.kinopoiskId as number) ? 'active' : ''}`} onClick={() => handleFavoriteClick(item?.kinopoiskId as number)}></i>
                <img className="image-cover" src={item?.posterUrl || item?.posterUrlPreview} alt={item?.nameOriginal || item?.nameRu as string} />
              </div>
              <SubmitButton text='Video' isBusy={!itemVideo} handleClick={handleClick} />
            </div>

            <div className="details__content">
              <div className="content-title">
                <h2 className="content-movie_title">
                  {item?.nameOriginal || item?.nameRu}
                </h2>
                <div className="content-vote_average">
                  {item?.ratingKinopoisk}
                </div>
              </div>

              <div className="content-tagline">
                {item?.slogan || item?.nameRu}
                <div>{item?.shortDescription}</div>
              </div>

              <div className="content-info">
                <span className="content-info_date">
                  {item?.year}
                </span>
                <span className="content-info_runtime">
                  {item?.serial ? `${item?.filmLength || 1} series` : `${item?.filmLength || 90} min`}
                </span>
              </div>

              <div className="content-overview">
                {item?.description || 'Описание фильма временно не доступно'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
