import React, { useState, useEffect } from 'react';
import MovieCard from '../movieCard/MovieCard';
import './MovieContainer.scss';
import moviesList from '../../moviesData/movies';

const MovieContainer = () => {
  const [showOptions, setShowOptions] = useState({});
  const [movies, setMovies] = useState([]);

  const handleOpenClick = (event, id) => {
    const item = movies.filter((movie) => movie.id === id)[0]; // данные одного выбранного фильма
    event.stopPropagation();
    setShowOptions((item.id === id) ? { [item.id]: true } : null);
  }

  const handleCloseClick = () => {
    setShowOptions(movies.map((movie) => ({ [movie.id]: false })));
  }


  const APIUrl = 'https://api.kinopoisk.dev/movie';
  const APIParams = 'type=movie&limit=15&sortField=videos.trailers&sortType=-1';
  const token = 'token=JHK3S7G-6Q94NNT-M46ANNW-PN81PJN';
  const page = `page=${Math.floor(Math.random() * 200) + 1}`;

  const fetchMovieAPI = async () => {
    try {
      await fetch(`${APIUrl}?${APIParams}&${page}&${token}`)
        .then(response => response.json())
        .then(data => setMovies([...data.docs]));
    } catch (error) {
      console.log(error.message);
    }
  }


  useEffect(() => {
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/', {
      method: 'GET',
      headers: {
        'X-API-KEY': '4fa525f3-c08b-4f89-8459-00b56e10d8eb',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
    fetchMovieAPI();
  }, []);


  useEffect(() => {
    console.log(movies);
    document.addEventListener('click', handleCloseClick);
    return () => {
      document.removeEventListener('click', handleCloseClick);
    }
  }, []);

  return (
    <div className="movie__container">
      <div className="result">
        <span className="result__count">{movies.length}</span>
        <span> movies found</span>
      </div>

      <div className="container">
        {movies.map(movie => (
          <MovieCard
            data={movie}
            key={movie.id}
            showOptions={showOptions[movie.id]}
            handleClick={handleOpenClick} />
        ))}
      </div>
    </div>
  );
}

export default MovieContainer;
