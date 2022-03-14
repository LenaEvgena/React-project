import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesAPI } from '../../redux/asyncActions';
import { sortMoviesAsync, filterGenreMoviesAsync, setCurrentPage } from '../../redux/actions';
import { InitialStateType } from '../../types/types';
import './ResultsHeader.scss';

const SortResultsHeader: React.FC = () => {
  const dispatch = useDispatch();
  const isFavorListOpen = useSelector((state: InitialStateType) => state.isFavorListOpen);
  const currentPage = useSelector((state: InitialStateType) => state.currentPage);
  const sortType = useSelector((state: InitialStateType) => state.sortType);
  const filter = useSelector((state: InitialStateType) => state.filter);
  const keyword = useSelector((state: InitialStateType) => state.keyword);
  const isFetching = useSelector((state: InitialStateType) => state.isFetching);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [filter])

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getMoviesAPI(currentPage, sortType, filter, keyword));
  }, [currentPage, sortType, filter]);

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(sortMoviesAsync(e.target.value));
  }

  return (
    <div className="results__header">
      {!isFavorListOpen && <>
        <div className="results__filter">
          <ul>
            <li className={`${isFetching && 'busy'} ${filter === 'all' && 'active'}`} onClick={() => dispatch(filterGenreMoviesAsync('all'))}>All</li>
            <li className={`${isFetching && 'busy'} ${filter === 'drama' && 'active' }`} onClick={() => dispatch(filterGenreMoviesAsync('drama'))}>Drama</li>
            <li className={`${isFetching && 'busy'} ${filter === 'melodrama' && 'active'}`} onClick={() => dispatch(filterGenreMoviesAsync('melodrama'))}>Melodrama</li>
            <li className={`${isFetching && 'busy'} ${filter === 'thriller' && 'active'}`} onClick={() => dispatch(filterGenreMoviesAsync('thriller'))}>Thriller</li>
            <li className={`${isFetching && 'busy'} ${filter === 'crime' && 'active'}`} onClick={() => dispatch(filterGenreMoviesAsync('crime'))}>Crime</li>
          </ul>
        </div>
        <div className="results__sort">
          <span>Sort by</span>
          <select className={`${isFetching && 'busy'} select`} onChange={handleClick}>
            <option value="RATING">Rating</option>
            <option value="YEAR">Release date</option>
          </select>
        </div>
      </>}
    </div>
  )
};

export default SortResultsHeader;
