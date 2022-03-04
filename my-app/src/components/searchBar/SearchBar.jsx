import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { setMoviesKeyword, setCurrentPage } from '../../redux/actions';
import { getMoviesAPI } from '../../redux/api';
import './SearchBar.scss';

const SearchBar = ({ currentPage, sortType, filter, keyword }) => {
  const dispatch = useDispatch();

  console.log(keyword);
  const handleChange = ({ target }) => dispatch(setMoviesKeyword(target.value));

  const handleClick = () => {
    if (!keyword.trim()) return;
    dispatch(setCurrentPage(1));
    dispatch(getMoviesAPI(currentPage, sortType, filter, keyword));
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

const mapDispatchToProps = () => ({
  getMoviesAPI,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
