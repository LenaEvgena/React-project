import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import SubmitButton from '../common/submitButton/SubmitButton';
import Footer from './../common/footer/Footer';
import './AuthForm.scss';
import ResetButton from '../common/resetButton/ResetButton';
import { removeAuthName, removeAuthPassword, setAuthName, setAuthPassword } from '../../redux/actions';
import { Link } from 'react-router-dom';

const AutnForm: React.FC = () => {
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
            <h2 className="modal__title">Log in</h2>
          </div>

          <form action="!#" className="auth__form">

            <label htmlFor="form-name" className="form-title">
              Username
              <input className="form-input" type="text" id="form-name" value={userName} onChange={(e) => dispatch(setAuthName(e.target.value))} />
            </label>

            <label htmlFor="form-pass" className="form-title">
              Password
              <input className="form-input" type="password" id="form-pass" value={password} onChange={(e) => dispatch(setAuthPassword(e.target.value))} />
            </label>

          </form>
          <div className="modal-button">
            <ResetButton text="Reset" handleClick={handleReset} />
            <Link to='/'>
              <SubmitButton text="Log in" handleClick={() => { }} />
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

export default AutnForm;
