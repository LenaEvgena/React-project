import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './ResultsHeader.scss';
import { getMoviesAPI } from '../../redux/api';
import { sortMoviesAsync, filterGenreMoviesAsync, setCurrentPage } from '../../redux/actions';

const SortResultsHeader = ({ currentPage, filter, sortType, keyword, getMoviesAPI, sortMoviesAsync, filterGenreMoviesAsync, setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage(1);
  }, [filter])

  useEffect(() => {
    window.scroll(0, 0);
    getMoviesAPI(currentPage, sortType, filter, keyword);
  }, [currentPage, sortType, filter, keyword]);

  return (
    <div className="results__header">
      <div className="results__filter">
        <ul>
          <li className={filter === 'all' ? 'active' : ''} onClick={() => filterGenreMoviesAsync('all')}>All</li>
          <li className={filter === 'drama' ? 'active' : ''} onClick={() => filterGenreMoviesAsync('drama')}>Drama</li>
          <li className={filter === 'melodrama' ? 'active' : ''} onClick={() => filterGenreMoviesAsync('melodrama')}>Melodrama</li>
          <li className={filter === 'thriller' ? 'active' : ''} onClick={() => filterGenreMoviesAsync('thriller')}>Thriller</li>
          <li className={filter === 'crime' ? 'active' : ''} onClick={() => filterGenreMoviesAsync('crime')}>Crime</li>
        </ul>
      </div>
      <div className="results__sort">
        <span>Sort by</span>
        <select className="select" onClick={(e) => sortMoviesAsync(e.target.value)}>
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
  keyword: state.keyword,
})

const mapDispatchToProps = (dispatch) => ({
  getMoviesAPI: (currentPage, sortType, filter, keyword) => dispatch(getMoviesAPI(currentPage, sortType, filter, keyword)),
  sortMoviesAsync: (e) => dispatch(sortMoviesAsync(e)),
  filterGenreMoviesAsync: (v) => dispatch(filterGenreMoviesAsync(v)),
  setCurrentPage: (v) => dispatch(setCurrentPage(v)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SortResultsHeader);
