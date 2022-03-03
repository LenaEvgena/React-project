import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import MovieCard from '../movieCard/MovieCard';
import './MovieContainer.scss';
import { getMoviesAPI, setCurrentPage } from '../../redux/actions';
import { createPages } from '../../redux/createPages';

const MovieContainer = () => {
  const [showOptions, setShowOptions] = useState({});
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.items); //получаем состояние из store
  const totalCount = useSelector(state => state.totalCount); //получаем состояние из store
  const currentPage = useSelector(state => state.currentPage); //получаем состояние из store
  const total = useSelector(state => state.total); //получаем состояние из store
  const pages = [];

  createPages(pages, total, currentPage);

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
    dispatch(getMoviesAPI(currentPage));
    window.scroll(0, 0);
  }, [currentPage, dispatch]);

  useEffect(() => {
    document.addEventListener('click', handleCloseClick);
    return () => {
      document.removeEventListener('click', handleCloseClick);
    }
  }, []);

  if (totalCount === 0) {
    return (
      <div className="movie__container">
        <div className="loading">No movies found</div>
      </div>
    )
  }

  if (totalCount === undefined) {
    return (
      <div className="movie__container">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  return (
    <div className="movie__container">
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
      <div className="pages">
        {pages.map((page, index) => <span
          className={currentPage === page ? "page active" : "page"}
          key={index}
          onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
      </div>
    </div>
  );
}

//преобразовывает state в props
const mapStateToProps = state => {
  console.log('State: ', state);
  return {
    movies: state.movies,
    totalCount: state.totalCount,
    currentPage: state.currentPage,
  };
};

const mapDispatchToProps = {
  getMoviesAPI,
  setCurrentPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
