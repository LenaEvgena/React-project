import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDeleteMovieForm, deleteMovieById } from '../../redux/actions';
import Footer from '../footer/Footer';
import LogoTitle from '../logoTitle/LogoTitle';
import SubmitButton from '../submitButton/SubmitButton';
import './DeleteModal.scss';

const DeleteModal = () => {
  const dispatch = useDispatch();
  const modalRef = React.createRef();
  const id = useSelector(state => state.movieIdToDelete);

  const handleOutsideClick = (event) => {
    if (modalRef.current.contains(event.target)) {
      return;
    }
    closeDeleteMovieForm();
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
            <SubmitButton text="confirm" handleClick={() => dispatch(deleteMovieById(id))} />
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
