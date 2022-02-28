import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from '../deleteModal/DeleteModal';
import MovieModal from '../movieModal/MovieModal';
import './MovieCard.scss';

const MovieCard = (props) => {
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleMovieModal = () => {
    setShowMovieModal(!showMovieModal);
  }

  const handleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  }

  return (
    <div className="movie">
      <div className="movie__image">
        <img className="movie__card" id={props.data.id} src={props.data.poster_path} alt={props.data.title} />

        {!props.showOptions ?
          <div className="dots" onClick={(event) => props.handleClick(event, props.data.id)}></div>
          : <div className="options__modal">
            <div className="options-close">x</div>
            <div className="options-edit" onClick={handleMovieModal}>Edit</div>
            <div className="options-delete" onClick={handleDeleteModal}>Delete</div>
          </div>}
        {showMovieModal && <MovieModal isAddModal={false} handleMovieModal={handleMovieModal} />}
        {showDeleteModal && <DeleteModal handleDeleteModal={handleDeleteModal} />}

      </div>

      <div className="movie__description">
        <div className="movie__title">
          <h3>
            <Link to={`/movie/${props.data.id}`}>{props.data.title}</Link>
          </h3>
          <p className="movie__date">
            {props.data.release_date.split('-')[0]}
          </p>
        </div>

        <div className="movie__genre">
          {props.data.genres.join(', ')}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
