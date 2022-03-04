import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import MovieCard from '../movieCard/MovieCard';
import './MovieContainer.scss';
import { createPages } from '../../utils/createPages';
import { getMoviesAPI } from '../../redux/api';
import { setCurrentPage } from '../../redux/actions';

const MovieContainer = ({ movies, currentPage, total, totalCount, sortType, isFetching, isFetchedError }) => {
  const [showOptions, setShowOptions] = useState({});
  const dispatch = useDispatch();
  const pages = [];

  console.log("Тип из стора", sortType);

  createPages(pages, total, currentPage);

  const handleOpenClick = (event, id) => {
    const item = movies.filter((movie) => movie.kinopoiskId === id)[0]; // данные одного выбранного фильма
    setShowOptions((item.kinopoiskId === id) ? { [item.kinopoiskId]: true } : null);
    event.stopPropagation();
  }

  const handleCloseClick = () => {
    setShowOptions(movies.map((movie) => ({ [movie.kinopoiskId]: false })));
  }

  console.log('showOptions', showOptions);

  useEffect(() => {
    dispatch(getMoviesAPI(currentPage, sortType));
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleCloseClick);
    return () => {
      document.removeEventListener('click', handleCloseClick);
    }
  }, []);

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
    movies: state.movies.items,
    total: state.total,
    totalCount: state.totalCount,
    currentPage: state.currentPage,
    sortType: state.sortType,
    isFetching: state.isFetching,
    isFetchedError: state.isFetchedError,
  };
};

const mapDispatchToProps = {
  getMoviesAPI,
  setCurrentPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
