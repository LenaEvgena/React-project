import React, { useState } from 'react';
import Footer from '../footer/Footer';
import LogoTitle from '../logoTitle/LogoTitle';
import ResetButton from '../resetButton/ResetButton';
import SubmitButton from '../submitButton/SubmitButton';
import './MovieModal.scss';

const MovieModal = (props) => {
  const [showDropList, setShowDropList] = useState(false);
  const [movieId, setMovieId] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDate, setMovieDate] = useState('');
  const [movieURL, setMovieURL] = useState('');
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieOverview, setMovieOverview] = useState('');
  const [movieTime, setMovieTime] = useState('');
  const modalRef = React.createRef();
  const dropdownRef = React.createRef();

  const handleDropList = () => {
    setShowDropList(!showDropList);
  }

  const handleCheckBox = ({ target }) => {
    const name = target.name;

    setMovieGenres(
      target.checked ?
        [...movieGenres, name]
        : movieGenres.filter(item => item !== name)
    );
  }

  const handleReset = () => {
    setShowDropList(false);
    setMovieId('');
    setMovieTitle('');
    setMovieDate('');
    setMovieURL('');
    setMovieGenres([]);
    setMovieOverview('');
    setMovieTime('');
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current.contains(event.target)) {
      return;
    }
    props.handleMovieModal();
  }

  const handleDropdownOutsideClick = (event) => {
    if (dropdownRef.current.contains(event.target)) {
      return;
    }
    setShowDropList(false);
  }

  return (
    <div className="edit__modal">
      <div className="modal__wrapper" onClick={handleOutsideClick}>
        <div className="modal-logo">
          <LogoTitle />
        </div>
        <div className="modal" ref={modalRef} onClick={handleDropdownOutsideClick}>
          <div className="modal-close" onClick={props.handleMovieModal}></div>
          <div className="modal__content">
            <h2 className="modal__title">{props.isAddModal ? 'Add' : 'Edit'} movie</h2>
            <div className="modal__form-edit">
              <form action="!#" className="edit__form">

                {!props.isAddModal &&
                  <label htmlFor="movie-id" className="movie-id">
                    Movie ID
                    <input type="text" id="movie-id" name="movieId" disabled value={movieId} />
                  </label>}

                <label htmlFor="movie-title" className="movie-title">
                  Title
                  <input className="edit-input" type="text" id="movie-title" name="movieTitle" value={movieTitle} placeholder="Title here" onChange={({ target }) => setMovieTitle(target.value)} />
                </label>
                <label htmlFor="movie-date" className="movie-date">
                  Release date
                  <input className="edit-input date-input" type="date" id="movie-date" name="movieDate" value={movieDate} onChange={({ target }) => setMovieDate(target.value)} />
                </label>
                <label htmlFor="movie-url" className="movie-url">
                  Movie URL
                  <input className="edit-input" type="text" id="movie-url" name="movieURL" value={movieURL} placeholder="Movie URL here" onChange={({ target }) => setMovieURL(target.value)} />
                </label>
                <label htmlFor="movie-genre" className="movie-genre" ref={dropdownRef}>
                  Genre
                  <div className="edit-input dropdown" id="movie-genre">
                    <div className="dropdown-genre">
                      {movieGenres && movieGenres.join(', ') || "Select Genre"}
                    </div>
                    <span className={`dropdown-icon ${showDropList && 'active'}`} onClick={handleDropList}></span>
                  </div>

                  {showDropList &&
                    <div className="dropdown-list">
                      <label htmlFor="documentary">
                        <input className="dropdown-input option-input" type="checkbox" id="documentary" name="documentary" checked={movieGenres.includes('documentary')} onChange={handleCheckBox} />
                        Documentary
                      </label>
                      <label htmlFor="comedy">
                        <input className="dropdown-input option-input" type="checkbox" id="comedy" name="comedy" checked={movieGenres.includes('comedy')} onChange={handleCheckBox} />
                        Comedy
                      </label>
                      <label htmlFor="horror">
                        <input className="dropdown-input option-input" type="checkbox" id="horror" name="horror" checked={movieGenres.includes('horror')} onChange={handleCheckBox} />
                        Horror
                      </label>
                      <label htmlFor="crime">
                        <input className="dropdown-input option-input" type="checkbox" id="crime" name="crime" checked={movieGenres.includes('crime')} onChange={handleCheckBox} />
                        Crime
                      </label>
                    </div>
                  }

                </label>
                <label htmlFor="movie-overview" className="movie-overview">
                  Overview
                  <input className="edit-input" type="text" id="movie-overview" name="movieOverview" value={movieOverview} placeholder="Overview here" onChange={({ target }) => setMovieOverview(target.value)} />
                </label>
                <label htmlFor="movie-runtime" className="movie-runtime">
                  Runtime
                  <input className="edit-input" type="text" id="movie-runtime" name="movieTime" value={movieTime} placeholder="Runtime here" onChange={({ target }) => setMovieTime(target.value)} />
                </label>
              </form>
            </div>
          </div>
          <div className="modal-button">
            <ResetButton text="reset" handleClick={handleReset} />
            {props.isAddModal ?
              <SubmitButton text="submit" handleClick={props.handleMovieModal} />
              : <SubmitButton text="save" handleClick={props.handleMovieModal} />}
          </div>
        </div>
        <div className="modal-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
