import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieById, fetchVideoById } from '../../redux/asyncActions';
import { removeFavoriteMovie, setFavoriteMovie } from '../../redux/actions';
import Background from '../background/Background';
import LogoTitle from '../logoTitle/LogoTitle';
import SubmitButton from '../submitButton/SubmitButton';
import VideoModal from '../videoModal/VideoModal';
import './MovieDetails.scss';

const MovieDetails = (props) => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.selectedByIdMovie);
  const favoriteMovies = useSelector(state => state.favoriteMovies);
  const { id } = useParams();
  const [showVideoModal, setShowVideoModal] = useState(false);

  const isFavorite = (id) => favoriteMovies.some((item) => item.kinopoiskId === id);

  const handleVideoModal = () => {
    setShowVideoModal(!showVideoModal);
  };

  const handleClick = () => {
    window.scroll(0, 0);
    dispatch(fetchVideoById(id));
    handleVideoModal();
  };

  const handleFavoriteClick = (id) => {
    if (isFavorite(id)) {
      dispatch(removeFavoriteMovie(id));
    } else {
      dispatch(setFavoriteMovie(id));
    }
  }

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchMovieById(id));
  }, [id]);

  return (
    <>
      {showVideoModal && <VideoModal movie={item} handleVideoModal={handleVideoModal} />}

      <div className="movie__details">
        <Background />
        <div className="details">
          <div className="details__header">
            <LogoTitle />
            <Link to='/' className="details-search" type="button"></Link>
          </div>
          <div className="details__container">
            <div className="details__aside">
              <div className="details__image">
                <i className={`movie_icon-fav ${isFavorite(item?.kinopoiskId) ? 'active' : ''}`} onClick={() => handleFavoriteClick(item?.kinopoiskId)}></i>

                <img className="image-cover" src={item?.posterUrl || item?.posterUrlPreview} alt={item?.nameOriginal || item?.nameRu} />
              </div>
              <SubmitButton text={'Video'} handleClick={handleClick} />
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
