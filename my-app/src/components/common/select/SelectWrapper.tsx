import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { sortMoviesAsync, setCurrentPage } from '../../../redux/actions';
import { getSelectOptions } from '../../../utils/getSelectOptions';
import Select from './Select';
import './Select.scss';

const SelectWrapper: React.FC = () => {
  const dispatch = useDispatch();
  const ratingRef = useRef<HTMLLIElement>(null);
  const yearRef = useRef<HTMLLIElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  const { isFetching, sortType } = useTypedSelector((state) => state);

  const handleOpenOptions = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setShowOptions(!showOptions);
  }

  const handleCloseOptions = (): void => {
    setShowOptions(false);
  }

  const handleRatingOption = (): void => {
    dispatch(setCurrentPage(1));
    dispatch(sortMoviesAsync(ratingRef.current?.dataset.value || ''));
  }

  const handleYearOption = (): void => {
    dispatch(setCurrentPage(1));
    dispatch(sortMoviesAsync(yearRef.current?.dataset.value || ''));
  }

  const selectOptions = getSelectOptions(showOptions, isFetching, handleOpenOptions, handleRatingOption, handleYearOption, ratingRef, yearRef);

  useEffect(() => {
    document.addEventListener('click', handleCloseOptions);
    return () => {
      document.removeEventListener('click', handleCloseOptions);
    }
  });

  return (
    <Select selectOptions={selectOptions} sortType={sortType} />
  )
};

export default SelectWrapper;
