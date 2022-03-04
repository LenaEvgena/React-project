import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import './ResultsHeader.scss';
import { getMoviesAPI, filterMoviesByGenreAPI } from '../../redux/api';
import { sortMoviesAsync, filterGenreMoviesAsync } from '../../redux/actions';

const SortResultsHeader = ({ currentPage, filter }) => {
  console.log(filter);
  const dispatch = useDispatch();

  const setType = (e) => {
    dispatch(getMoviesAPI(currentPage, e.target.value));
  }

  useEffect(() => {
    dispatch(filterMoviesByGenreAPI(currentPage, filter))
  }, [currentPage, filter]);


  return (
    <div className="results__header">
      <div className="results__filter">
        <ul>
          <li className={filter === 'all' ? 'active' : ''} onClick={() => dispatch(filterGenreMoviesAsync('all'))}>All</li>
          <li className={filter === 'drama' ? 'active' : ''} onClick={() => dispatch(filterGenreMoviesAsync('drama'))}>Drama</li>
          <li className={filter === 'melodrama' ? 'active' : ''} onClick={() => dispatch(filterGenreMoviesAsync('melodrama'))}>Melodrama</li>
          <li className={filter === 'thriller' ? 'active' : ''} onClick={() => dispatch(filterGenreMoviesAsync('thriller'))}>Thriller</li>
          <li className={filter === 'crime' ? 'active' : ''} onClick={() => dispatch(filterGenreMoviesAsync('crime'))}>Crime</li>
        </ul>
      </div>
      <div className="results__sort">
        <span>Sort by</span>
        <select className="select" onClick={(e) => setType(e)}>
          <option value="RATING">Rating</option>
          <option value="YEAR">Release date</option>
        </select>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  sortType: state.sortType,
  filter: state.filter,
})

const mapDispatchToProps = () => ({
  getMoviesAPI,
  sortMoviesAsync,
  filterGenreMoviesAsync
})

export default connect(mapStateToProps, mapDispatchToProps)(SortResultsHeader);
