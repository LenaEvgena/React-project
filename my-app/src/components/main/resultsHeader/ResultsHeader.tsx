import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { sortMoviesAsync, filterGenreMoviesAsync, setCurrentPage } from '../../../redux/actions';
import classNames from 'classnames';
import './ResultsHeader.scss';

const SortResultsHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { filter, isFetching, isFavorListOpen } = useTypedSelector((state) => state);
  let cls = classNames({ 'busy': isFetching });
  let clsSelect = classNames('select', { 'busy': isFetching });

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setCurrentPage(1));
    dispatch(sortMoviesAsync(e.target.value));
  }

  const handleOnFilterClick = (genre: string): void => {
    dispatch(setCurrentPage(1));
    dispatch(filterGenreMoviesAsync(genre));
  }

  return (
    <>
      <div className="results-header_line"></div>
      <div className="results__header">
        {!isFavorListOpen && <>
          <div className="results__filter">
            <ul>
              <li className={`${cls} ${filter === 'all' && 'active'}`} onClick={() => handleOnFilterClick('all')}>All</li>
              <li className={`${cls} ${filter === 'drama' && 'active'}`} onClick={() => handleOnFilterClick('drama')}>Drama</li>
              <li className={`${cls} ${filter === 'melodrama' && 'active'}`} onClick={() => handleOnFilterClick('melodrama')}>Melodrama</li>
              <li className={`${cls} ${filter === 'thriller' && 'active'}`} onClick={() => handleOnFilterClick('thriller')}>Thriller</li>
              <li className={`${cls} ${filter === 'crime' && 'active'}`} onClick={() => handleOnFilterClick('crime')}>Crime</li>
            </ul>
          </div>
          <div className="results__sort">
            <span>Sort by</span>
            <select className={clsSelect} onChange={handleClick}>
              <option value="RATING">Rating</option>
              <option value="YEAR">Release date</option>
            </select>
          </div>
        </>}
      </div>
    </>
  )
};

export default SortResultsHeader;
