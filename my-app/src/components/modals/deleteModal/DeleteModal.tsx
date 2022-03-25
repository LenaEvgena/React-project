import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { closeDeleteMovieForm, deleteMovieById } from './../../../redux/actions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LogoTitle from '../../common/logoTitle/LogoTitle';
import Footer from './../../common/footer/Footer';
import Button from '../../common/button/Button';
import { deleteFavor } from '../../../firebase';
import { UserImplType } from '../../../types/types';
import useAuth from '../../../hooks/useAuth';
import './DeleteModal.scss';

const DeleteModal: React.FC = () => {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const id = useTypedSelector(state => state.movieIdToDelete);
  const user = useAuth();

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (modalRef.current?.contains(e.target as Element)) {
      return;
    }
    dispatch(closeDeleteMovieForm());
  }

  const handleDeleteClick = (id: number, user: UserImplType): void => {
    dispatch(deleteMovieById(id));
    deleteFavor(id, user);
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
            <Button className='submit__button' type='button' text='confirm' handleClick={() => handleDeleteClick(id as number, user)} />
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
