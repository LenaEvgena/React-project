import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavoriteList } from '../../redux/actions';
import FavorButton from '../favorButton/FavorButton';
import LogoTitle from '../logoTitle/LogoTitle';
import SearchForm from '../searchForm/SearchForm';
import Background from '../background/Background';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { InitialStateType } from '../../types/types';
import './Header.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isFavorListOpen = useSelector((state: InitialStateType) => state.isFavorListOpen);
  let text = !isFavorListOpen ? 'Show favorites' : 'Close favorites';

  const handleFavoriteClick = (): void => {
    if (isFavorListOpen) {
      dispatch(toggleFavoriteList(false));
    } else {
      dispatch(toggleFavoriteList(true));
    }
  }

  return (
    <>
      <header className="header">
        <ErrorBoundary>
          <Background />
          <div className="header__wrapper">
            <div className="header__logo">
              <LogoTitle />
              <FavorButton handleClick={handleFavoriteClick} text={text} />
            </div>
            <SearchForm />
          </div>
        </ErrorBoundary>
      </header>
    </>
  );
}

export default Header;
