import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import SubmitButton from '../common/submitButton/SubmitButton';
import ResetButton from '../common/resetButton/ResetButton';
import { removeAuthName, removeAuthPassword, setAuthName, setAuthPassword } from '../../redux/actions';
import './AuthForm.scss';

type PropsType = {
  title: string,
  handleClick: () => void,
}

const AuthForm: React.FC<PropsType> = ({ title, handleClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName, password } = useTypedSelector(state => state);

  const handleReset = (): void => {
    if (userName.trim()) {
      dispatch(removeAuthName(''));
    };
    if (password.trim()) {
      dispatch(removeAuthPassword(''));
    }
  };

  const handleClose = (): void => {
    handleReset();
    navigate('/');
  }

  return (
    <div className="auth__modal">
      <div className="modal__wrapper">
        <div className="modal__form">
          {title === 'register' ?
            <>
              <h3>Already have an account?</h3>
              <Link to='/auth' className="modal__form-link">Sign in now</Link>
            </>
            :
            <>
              <h3>Don't have an account?</h3>
              <Link to='/register' className="modal__form-link">Register now</Link>
            </>
          }
        </div>
        <div className="modal">
          <div className="modal-close" onClick={handleClose}></div>
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
    </div>
  );
};

export default AuthForm;
