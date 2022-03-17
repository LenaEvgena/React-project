import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import SubmitButton from '../common/submitButton/SubmitButton';
import Footer from './../common/footer/Footer';
import ResetButton from '../common/resetButton/ResetButton';
import { removeAuthName, removeAuthPassword, setAuthName, setAuthPassword } from '../../redux/actions';
import './AuthForm.scss';

type PropsType = {
  title: string,
  handleClick: () => void,
}

const AuthForm: React.FC<PropsType> = ({title, handleClick}) => {
  const dispatch = useDispatch();
  const { userName, password } = useTypedSelector(state => state);

  const handleReset = (): void => {
    if (userName.trim()) {
      dispatch(removeAuthName(''));
    };
    if (password.trim()) {
      dispatch(removeAuthPassword(''));
    }
  };

  return (
    <div className="auth__modal">
      <div className="modal__wrapper">
        <div className="modal">
          <div className="modal__content">
            <h2 className="modal__title">{title}</h2>
          </div>

          <form action="!#" className="auth__form">

            <label htmlFor="form-name" className="form-title">
              User email
              <input className="form-input" type="email" id="form-name" value={userName} onChange={(e) => dispatch(setAuthName(e.target.value))} />
            </label>

            <label htmlFor="form-pass" className="form-title">
              Password
              <input className="form-input" type="password" id="form-pass" value={password} onChange={(e) => dispatch(setAuthPassword(e.target.value))} />
            </label>

          </form>
          <div className="modal-button">
            <ResetButton text="Reset" handleClick={handleReset} />
            <Link to='/'>
              <SubmitButton text={title} handleClick={handleClick} />
            </Link>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <Footer />
      </div>
    </div>
  );
};

export default AuthForm;
