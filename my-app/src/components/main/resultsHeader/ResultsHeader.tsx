import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { filterGenreMoviesAsync, setCurrentPage } from '../../../redux/actions';
import { getLiOptions } from '../../../utils/getLiOptions';
import Select from '../../common/select/Select';
import './ResultsHeader.scss';

const ResultsHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { filter, isFetching, isFavorListOpen } = useTypedSelector((state) => state);
  const liOptions = getLiOptions(isFetching, filter)

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
          <Select />
        </>}
      </div>
    </>
  )
};

export default ResultsHeader;
