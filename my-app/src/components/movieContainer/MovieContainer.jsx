import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../movieCard/MovieCard';
import './MovieContainer.scss';
import { createPages } from '../../utils/createPages';
import { getMoviesAPI } from '../../redux/api';
import { setCurrentPage } from '../../redux/actions';

const MovieContainer = ({ movies, currentPage, total, totalCount, sortType, isFetching, isFetchedError, getMoviesAPI, setCurrentPage }) => {
  const pages = [];
  createPages(pages, total, currentPage);

  useEffect(() => {
    window.scroll(0, 0);
    getMoviesAPI(currentPage, sortType);
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
