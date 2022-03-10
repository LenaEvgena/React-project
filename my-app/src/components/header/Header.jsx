import React from 'react';
import { useSelector } from 'react-redux';
import AddButton from '../addButton/AddButton';
import LogoTitle from '../logoTitle/LogoTitle';
import SearchForm from '../searchForm/SearchForm';
import Background from '../background/Background';
import './Header.scss';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const Header = (props) => {
  const favoriteMovies = useSelector(state => state.favoriteMovies);

  const handleClick = () => {
    console.log('favoriteMovies', favoriteMovies);
  }

  return (
    <>
      <header className="header">
        <ErrorBoundary>
          <Background />
          <div className="header__wrapper">
            <div className="header__logo">
              <LogoTitle />
              <AddButton handleClick={handleClick} />
            </div>
            <SearchForm />
          </div>
        </ErrorBoundary>
      </header>
    </>
  );
}

export default Header;
