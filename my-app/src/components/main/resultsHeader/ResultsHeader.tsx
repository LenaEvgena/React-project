import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { sortMoviesAsync, filterGenreMoviesAsync, setCurrentPage } from '../../../redux/actions';
import { getLiOptions } from '../../../utils/constants';
import './ResultsHeader.scss';

const SortResultsHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { filter, isFetching, isFavorListOpen } = useTypedSelector((state) => state);
  const liOptions = getLiOptions(isFetching, filter)
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
              {
                liOptions.map((item) => <li className={item.cls} key={item.type} onClick={() => handleOnFilterClick(item.type)}>{item.type}</li>)
              }
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
