import React from 'react';
import Background from '../background/Background';
import LogoTitle from '../logoTitle/LogoTitle';
import './MovieDetails.scss';
import movies from '../../moviesData/movies';

const MovieDetails = (props) => {
  let id = Number(props.movieId);
  const item = movies.filter((movie) => movie.id === id)[0];

  return (
    <div className="movie__details">
      <Background />
      <div className="details">
        <div className="details__header">
          <LogoTitle />
          <button className="details-search" type="button" onClick={props.handleClick}></button>
        </div>
        <div className="details__container">
          <div className="details__image">
            <img src={item.poster_path} alt={item.title} className="image-cover" />
          </div>

          <div className="details__content">

            <div className="content-title">
              <h2 className="content-movie_title">
                {item.title}
              </h2>
              <div className="content-vote_average">
                {item.vote_average}
              </div>
            </div>

            <div className="content-tagline">
              {item.tagline}
            </div>

            <div className="content-info">
              <span className="content-info_date">
                {item.release_date.split('-')[0]}
              </span>
              <span className="content-info_runtime">
                {item.runtime} min
              </span>
            </div>

            <div className="content-overview">
              {item.overview}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
