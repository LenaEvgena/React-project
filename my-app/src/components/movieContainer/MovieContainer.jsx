import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../movieCard/MovieCard';
import './MovieContainer.scss';
import { createPages } from '../../utils/createPages';
import { getMoviesAPI } from '../../redux/api';
import { setCurrentPage } from '../../redux/actions';

const MovieContainer = ({ movies, currentPage, total, totalCount, sortType, isFetching, isFetchedError, getMoviesAPI, setCurrentPage }) => {
  const [showOptions, setShowOptions] = useState({});
  const pages = [];

  useEffect(() => {
    window.scroll(0, 0);
    getMoviesAPI(currentPage, sortType);
  }, []);

  createPages(pages, total, currentPage);

console.log(movies);

  const handleOpenClick = (event, id) => {
    const item = movies.filter((movie) => movie.kinopoiskId === id)[0]; // данные одного выбранного фильма
    setShowOptions((item.kinopoiskId === id) ? { [item.kinopoiskId]: true } : null);
    event.stopPropagation();
  }

  const handleCloseClick = () => {
    setShowOptions(movies.map((movie) => ({ [movie?.kinopoiskId]: false })));
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseClick);
    return () => {
      document.removeEventListener('click', handleCloseClick);
    }
  }, []);

  console.log('showOptions', showOptions);

  if (isFetchedError) {
    return (<div className="error">
      <div className="error__wrapper">
        <div className="error_content">
          <h2 className="error_text">Page not Found</h2>
          <p className="error_num">404</p>
        </div>
      </div>
    </div>)
  }

  if (totalCount === 0) {
    return (
      <div className="movie__container">
        <div className="loading">No movies found</div>
      </div>
    )
  }

  return (
    <div className="movie__container">
      <div className="result">
        <span className="result__count">{totalCount}</span>
        <span> movies found</span>
      </div>

      <div className="pages">
        {pages.map((page, index) => <span
          className={currentPage === page ? "page active" : "page"}
          key={index}
          onClick={() => setCurrentPage(page)}>{page}</span>)}
      </div>

      {isFetching ? (
        <div className="loader">
          <div className="loader_image"></div>
          <div className="loading">Loading...</div>
        </div>) :
        <div className="container">
          {movies.map(movie => (
            <MovieCard
              data={movie}
              key={movie.kinopoiskId}
              showOptions={showOptions[movie.kinopoiskId]}
              handleClick={handleOpenClick}
            />)
          )}
        </div>}
    </div>
  );
}

//преобразовывает state в props
const mapStateToProps = state => {
  // console.log('State: ', state);
  return {
    movies: state.movies.items,
    total: state.total,
    totalCount: state.totalCount,
    currentPage: state.currentPage,
    sortType: state.sortType,
    isFetching: state.isFetching,
    isFetchedError: state.isFetchedError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getMoviesAPI: (currentPage, sortType) => dispatch(getMoviesAPI(currentPage, sortType)),
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
