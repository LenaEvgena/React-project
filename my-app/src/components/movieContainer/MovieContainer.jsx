import React, { useState, useEffect } from 'react';
import MovieCard from '../movieCard/MovieCard';
import './MovieContainer.scss';

const MovieContainer = () => {
  const [showOptions, setShowOptions] = useState({});
  const [movies, setMovies] = useState([]);

  const handleOpenClick = (event, id) => {
    const item = movies.filter((movie) => movie.kinopoiskId === id)[0]; // данные одного выбранного фильма
    event.stopPropagation();
    setShowOptions((item.kinopoiskId === id) ? { [item.kinopoiskId]: true } : null);
  }

  const handleCloseClick = () => {
    setShowOptions(movies.map((movie) => ({ [movie.kinopoiskId]: false })));
  }


  const APIUrl = 'https://kinopoiskapiunofficial.tech';
  const APIParams = '/api/v2.2/films/';
  const token = '4fa525f3-c08b-4f89-8459-00b56e10d8eb';
  const page = `page=${Math.floor(Math.random() * 20) + 1}`;


  const fetchMovieAPI = async () => {
    try {
      await fetch(`${APIUrl}${APIParams}?type=FILM&${page}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': token,
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => setMovies([...data.items]))
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
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
      {!movies.length ?
        <div className="loading">Loading...</div> :
        <>
          <div className="result">
            <span className="result__count">{movies.length}</span>
            <span> movies found</span>
          </div>
          <div className="container">
            {movies.map(movie => (
              <MovieCard
                data={movie}
                key={movie.kinopoiskId}
                showOptions={showOptions[movie.kinopoiskId]}
                handleClick={handleOpenClick} />
            ))}
          </div>
        </>
      }
    </div>
  );
}

export default MovieContainer;
