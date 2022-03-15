import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { sortMoviesAsync, filterGenreMoviesAsync, setCurrentPage } from '../../../redux/actions';
import './ResultsHeader.scss';

const SortResultsHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { filter, isFetching, isFavorListOpen } = useTypedSelector((state) => state);

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setCurrentPage(1));
    dispatch(sortMoviesAsync(e.target.value));
  }

  const handleOnFilterClick = (genre: string): void => {
    dispatch(setCurrentPage(1));
    dispatch(filterGenreMoviesAsync(genre));
  }

  return (
    <div className="results__header">
      {!isFavorListOpen && <>
        <div className="results__filter">
          <ul>
            <li className={`${isFetching && 'busy'} ${filter === 'all' && 'active'}`} onClick={() => handleOnFilterClick('all')}>All</li>
            <li className={`${isFetching && 'busy'} ${filter === 'drama' && 'active'}`} onClick={() => handleOnFilterClick('drama')}>Drama</li>
            <li className={`${isFetching && 'busy'} ${filter === 'melodrama' && 'active'}`} onClick={() => handleOnFilterClick('melodrama')}>Melodrama</li>
            <li className={`${isFetching && 'busy'} ${filter === 'thriller' && 'active'}`} onClick={() => handleOnFilterClick('thriller')}>Thriller</li>
            <li className={`${isFetching && 'busy'} ${filter === 'crime' && 'active'}`} onClick={() => handleOnFilterClick('crime')}>Crime</li>
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
