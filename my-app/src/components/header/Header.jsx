import React, { useState } from 'react';
import AddButton from '../addButton/AddButton';
import LogoTitle from '../logoTitle/LogoTitle';
import SearchForm from '../searchForm/SearchForm';
import MovieModal from '../movieModal/MovieModal';
import Background from '../background/Background';
import './Header.scss';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const Header = (props) => {
  const [showMovieModal, setShowMovieModal] = useState(false);
  const handleMovieModal = () => {
    setShowMovieModal(!showMovieModal);
  }

  return (
    <>
      {showMovieModal && <MovieModal isAddModal={true} handleMovieModal={handleMovieModal} />}

      <header className="header">
        <ErrorBoundary>
          <Background />
          <div className="header__wrapper">
            <div className="header__logo">
              <LogoTitle />
              <AddButton handleMovieModal={handleMovieModal} />
            </div>
            <SearchForm />
          </div>
        </ErrorBoundary>
      </header>
    </>
  );
}

export default Header;
