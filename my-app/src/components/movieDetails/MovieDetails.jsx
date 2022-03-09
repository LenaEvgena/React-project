import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchVideoById } from '../../redux/asyncActions';
import Background from '../background/Background';
import LogoTitle from '../logoTitle/LogoTitle';
import SubmitButton from '../submitButton/SubmitButton';
import './MovieDetails.scss';
import VideoModal from '../videoModal/VideoModal';

const APIUrl = 'https://kinopoiskapiunofficial.tech';
const APIParams = '/api/v2.2/films/';
const token = '4fa525f3-c08b-4f89-8459-00b56e10d8eb';

function useMovie(id) {
  const [movie, setMovie] = useState({});


  const fetchMovieById = async (movieId) => {
    try {
      const res = await fetch(`${APIUrl}${APIParams}${movieId}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': token,
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovieById(id);
  }, [id]);

  return movie;
}


const MovieDetails = (props) => {
  const { id } = useParams();
  const item = useMovie(id);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleVideoModal = () => {
    setShowVideoModal(!showVideoModal);
  }

  const handleClick = () => {
    window.scroll(0, 0);
    fetchVideoById(id);
    handleVideoModal();
  }

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
