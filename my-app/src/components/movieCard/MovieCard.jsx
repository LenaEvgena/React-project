import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from '../deleteModal/DeleteModal';
import MovieModal from '../movieModal/MovieModal';
import './MovieCard.scss';
import { closeDeleteMovieForm, openDeleteMovieForm } from '../../redux/actions';
import { connect } from 'react-redux';

const MovieCard = ({isDeleteFormOpen, openDeleteMovieForm, closeDeleteMovieForm, data}) => {
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleMovieModal = () => {
    setShowMovieModal(!showMovieModal);
  }

  const handleOptions = (e) => {
    e.stopPropagation();
    setShowOptions(!showOptions);
  }

  const handleCloseOptions = () => {
    setShowOptions(false);
  }

  useState(() => {
    document.addEventListener('click', handleCloseOptions);
    return () => {
      document.removeEventListener('click', handleCloseOptions);
    }
  });

  let genresList = [];
  data.genres.map((g) => genresList.push(g.genre));

  let countriesList = [];
  data.countries.map((c) => countriesList.push(c.country));

  return (
    <div className="movie">
      <div className="movie__image">
        <img className="movie__card" id={data.kinopoiskId} src={data.posterUrl || data.posterUrlPreview} alt={data.nameOriginal || data.nameRu} />

        {!showOptions ?
          <div className="dots" onClick={handleOptions}></div>
          : <div className="options__modal">
            <div className="options-close" onClick={handleOptions} >x</div>
            <div className="options-edit" onClick={handleMovieModal}>Edit</div>
            <div className="options-delete" onClick={() => openDeleteMovieForm(data.kinopoiskId)}>Delete</div>
          </div>}
        {showMovieModal && <MovieModal isAddModal={false} handleMovieModal={handleMovieModal} />}
        {isDeleteFormOpen && <DeleteModal handleDeleteModal={closeDeleteMovieForm} />}

      </div>

      <div className="movie__description">
        <div className="movie__title">
          <h3>
            <Link to={`/movie/${data.kinopoiskId}`}>{data.nameOriginal || data.nameRu}</Link>
          </h3>
          <p className="movie__date">
            {data.year}
          </p>
        </div>

        <div className="movie__country">
          {countriesList.join(', ')}
        </div>
        <div className="movie__genre">
          {genresList.join(', ')}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isDeleteFormOpen: state.isDeleteFormOpen,
})

const mapDispatchToProps = (dispatch) => ({
  openDeleteMovieForm: (id) => dispatch(openDeleteMovieForm(id)),
  closeDeleteMovieForm: (id) => dispatch(closeDeleteMovieForm(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
