import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { closeDeleteMovieForm, deleteMovieById, removeFavoriteMovie } from '../../redux/actions';
import Footer from '../footer/Footer';
import LogoTitle from '../logoTitle/LogoTitle';
import SubmitButton from '../submitButton/SubmitButton';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './DeleteModal.scss';

const DeleteModal: React.FC = () => {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const id = useTypedSelector(state => state.movieIdToDelete);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (modalRef.current?.contains(e.target as Element)) {
      return;
    }
    dispatch(closeDeleteMovieForm());
  }

  const handleDeleteClick = (id: number): void => {
    dispatch(deleteMovieById(id));
    dispatch(removeFavoriteMovie(id));
  }

  return (
    <div className="delete__modal">
      <div className="modal__wrapper" onClick={handleOutsideClick}>
        <LogoTitle />
        <div className="modal" ref={modalRef}>
          <div className="modal-close" onClick={() => dispatch(closeDeleteMovieForm())}></div>
          <div className="modal__content">
            <h2 className="modal__title">Delete movie</h2>
            <p className="modal__subtitle">Are you sure you want to delete this movie?</p>
          </div>
          <div className="modal-button">
            <SubmitButton text="confirm" handleClick={() => handleDeleteClick(id as number)} />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <Footer />
      </div>
    </div>
  );
};

export default DeleteModal;
