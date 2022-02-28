import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Background from '../background/Background';
import LogoTitle from '../logoTitle/LogoTitle';
import './MovieDetails.scss';
import movies from '../../moviesData/movies';

function useMovie(id) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(movies.find((el) => el.id == id));
  }, [id]);

  return movie;
}

const MovieDetails = (props) => {
  const { id } = useParams();
  const item = useMovie(id);

  return (
    <div className="movie__details">
      <Background />
      <div className="details">
        <div className="details__header">
          <LogoTitle />
          <Link to='/' className="details-search" type="button"></Link>
        </div>
        <div className="details__container">
          <div className="details__image">
            <img src={item?.poster_path} alt={item?.title} className="image-cover" />
          </div>

          <div className="details__content">

            <div className="content-title">
              <h2 className="content-movie_title">
                {item?.title}
              </h2>
              <div className="content-vote_average">
                {item?.vote_average}
              </div>
            </div>

            <div className="content-tagline">
              {item?.tagline}
            </div>

            <div className="content-info">
              <span className="content-info_date">
                {/* {item?.release_date.split('-')[0]} */}
              </span>
              <span className="content-info_runtime">
                {item?.runtime} min
              </span>
            </div>

            <div className="content-overview">
              {item?.overview}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
