import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Background from '../background/Background';
import LogoTitle from '../logoTitle/LogoTitle';
import './MovieDetails.scss';
import movies from '../../moviesData/movies';

const APIUrl = 'https://api.kinopoisk.dev/movie';
const APIParams = 'type=movie&limit=15&sortField=videos.trailers&sortType=-1';

const token = 'token=JHK3S7G-6Q94NNT-M46ANNW-PN81PJN';
const page = `page=${Math.floor(Math.random() * 100) + 1}`;


function useMovie(id) {
  const [movie, setMovie] = useState({});
  const queryId = `field=id&search=${id}`;

  const fetchMovieId = async () => {
    try {
      await fetch(`${APIUrl}?${APIParams}&${queryId}&${token}`)
        .then(response => response.json())
        // .then(data => console.log(data));
        .then(data => setMovie({...data}));

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovieId();
    console.log(movie);
    // setMovie(movies.find((el) => el.id == id));
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
            <img src={item.poster?.url || item.poster?.previewUrl} alt={item?.alternativeName || item?.name} className="image-cover" />
          </div>

          <div className="details__content">

            <div className="content-title">
              <h2 className="content-movie_title">
                {item?.alternativeName || item?.name}
              </h2>
              <div className="content-vote_average">
                {item.rating?.imdb}
              </div>
            </div>

            <div className="content-tagline">
              {/* {item?.genres} */}
            </div>

            <div className="content-info">
              <span className="content-info_date">
                {item?.year}
              </span>
              <span className="content-info_runtime">
                {item?.movieLength} min
              </span>
            </div>

            <div className="content-overview">
              {item?.description}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
