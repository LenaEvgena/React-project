import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { sortMoviesAsync, setCurrentPage } from '../../../redux/actions';
import './Select.scss';

const Select: React.FC = () => {
  const dispatch = useDispatch();
  const ratingRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  const { isFetching, sortType } = useTypedSelector((state) => state);
  let clsSelect = classNames('select', { 'active': showOptions }, { 'busy': isFetching });

  const handleOpenOptions = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setShowOptions(!showOptions);
  }

  const handleCloseOptions = (): void => {
    setShowOptions(false);
  }

  const handleRatingOption = (): void => {
    dispatch(setCurrentPage(1));
    dispatch(sortMoviesAsync(ratingRef.current?.dataset.value as string));
  }

  const handleYearOption = (): void => {
    dispatch(setCurrentPage(1));
    dispatch(sortMoviesAsync(yearRef.current?.dataset.value as string));
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseOptions);
    return () => {
      document.removeEventListener('click', handleCloseOptions);
    }
  });

  return (
    <>
      <div className="results__sort">
        <span className="results__title">Sort by</span>
        <div className={clsSelect} onClick={handleOpenOptions}>
          <div className="select__header">
            <span className="select__current">{sortType === 'RATING' ? sortType : 'release date'}</span>
            <div className="select__icon"></div>
          </div>
          <div className="select__body">
            <div className="select__option" onClick={handleRatingOption} ref={ratingRef} data-value="RATING">rating</div>
            <div className="select__option" onClick={handleYearOption} ref={yearRef} data-value="YEAR">release date</div>
          </div>
        </div>

      </div>
    </>
  )
};

export default Select;
