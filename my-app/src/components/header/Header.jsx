import React, {useState} from 'react';
import AddButton from '../addButton/AddButton';
import LogoTitle from '../logoTitle/LogoTitle';
import SearchForm from '../searchForm/SearchForm';
import MovieModal from '../movieModal/MovieModal';
import Background from '../background/Background';
import './Header.scss';

const Header = (props) => {
  const [showMovieModal, setShowMovieModal] = useState(false);
  const handleMovieModal = () => {
    setShowMovieModal(!showMovieModal);
  }

  return (
      <header className="header">
        <Background />
        <div className="header__wrapper">
          <div className="header__logo">
            <LogoTitle />
            <AddButton handleMovieModal={handleMovieModal} />
            { showMovieModal && <MovieModal isAddModal={true} handleMovieModal={handleMovieModal} /> }
          </div>

          <SearchForm />
        </div>
      </header>
  );
}

export default Header;
