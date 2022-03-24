import React from 'react';
import { useDispatch } from 'react-redux';
import { setMoviesKeyword } from '../../../redux/actions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import classNames from 'classnames';
import Button from '../../common/button/Button';
import './SearchBar.scss';

type PropsType = {
  isBusy: boolean,
  handleClick: () => void,
  handleResetClick: () => void,
}

const SearchBar: React.FC<PropsType> = ({ isBusy, handleClick, handleResetClick }) => {
  const dispatch = useDispatch();
  const { keyword } = useTypedSelector((state) => state);
  let cls = classNames('search__button', { 'busy': isBusy });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMoviesKeyword(e.target.value));
  }

  return (
    <div className="search">
      <input className="search__field" type="text" placeholder="What do you want to watch? Enter a keyword..." value={keyword} onChange={handleChange} />
      <Button className='search__button search__button-reset' type='button' handleClick={handleResetClick} />
      <Button className={cls} type='button' text='Search' handleClick={handleClick} />
    </div>
  );
}

export default SearchBar;
