import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import MovieCard from '../movieCard/MovieCard';
import './MovieContainer.scss';
import { getMoviesAsync } from '../../redux/actions';

const MovieContainer = () => {
  const [showOptions, setShowOptions] = useState({});
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.items); //получаем состояние из store
  const totalCount = useSelector(state => state.totalCount); //получаем состояние из store

  const handleOpenClick = (event, id) => {
    const item = movies.filter((movie) => movie.kinopoiskId === id)[0]; // данные одного выбранного фильма
    setShowOptions((item.kinopoiskId === id) ? { [item.kinopoiskId]: true } : { [item.kinopoiskId]: false });
    event.stopPropagation();
  }

  const handleCloseClick = () => {
    setShowOptions(movies.map((movie) => ({ [movie.kinopoiskId]: false })));
  }

  // console.log('showOptions', showOptions);

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleCloseClick);
    return () => {
      document.removeEventListener('click', handleCloseClick);
    }
  }, []);

  return (
    <div className="movie__container">

      {!totalCount ?

        <div className="loading">Loading...</div> :

        <>
          <div className="result">
            <span className="result__count">{totalCount}</span>
            <span> movies found</span>
          </div>
          <div className="container">
            {movies.map(movie => (
              <MovieCard
                data={movie}
                key={movie.kinopoiskId}
                showOptions={showOptions[movie.kinopoiskId]}
                handleClick={handleOpenClick}
                />
            ))}

          </div>
        </>
      }
    </div>
  );
}

//преобразовывает state в props
const mapStateToProps = state => {
  console.log('State: ', state);
  return {
    movies: state.movies,
    totalCount: state.totalCount,
  };
};

const mapDispatchToProps = {
  getMoviesAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
