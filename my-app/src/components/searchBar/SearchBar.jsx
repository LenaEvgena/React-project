import React from 'react';
import { connect } from 'react-redux';
import { setMoviesKeyword, setCurrentPage } from '../../redux/actions';
import { getMoviesAPI } from '../../redux/api';
import './SearchBar.scss';

const SearchBar = ({ currentPage, sortType, filter, keyword, setCurrentPage, setMoviesKeyword, getMoviesAPI }) => {
  const handleChange = ({ target }) => setMoviesKeyword(target.value);

  const handleClick = () => {
    if (!keyword.trim()) return;
    setCurrentPage(1);
    getMoviesAPI(currentPage, sortType, filter, keyword);
  }

  return (
    <div className="search">
      <input className="search__field" type="text" placeholder="What do you want to watch? Enter a keyword..." value={keyword} onChange={handleChange} />
      <button className="search__button" type="button" onClick={handleClick}>Search</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  sortType: state.sortType,
  filter: state.filter,
  keyword: state.keyword,
})

const mapDispatchToProps = (dispatch) => ({
  getMoviesAPI: (currentPage, sortType, filter, keyword) => dispatch(getMoviesAPI(currentPage, sortType, filter, keyword)),
  setMoviesKeyword: (e) => dispatch(setMoviesKeyword(e)),
  setCurrentPage: (v) => dispatch(setCurrentPage(v))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
