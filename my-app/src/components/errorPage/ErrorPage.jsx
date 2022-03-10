import React from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../logoTitle/LogoTitle';
import ResetButton from '../resetButton/ResetButton';
import './ErrorPage.scss';

const ErrorPage = (props) => (
  <>
    <div className="error">
      <div className="error_logo">
        <LogoTitle />
      </div>
      <div className="error__wrapper">
        <div className="error_content">
          <h2 className="error_text">Page not Found</h2>
          <p className="error_num">404</p>
          <Link to="/">
            <ResetButton handleClick={props.handleClick} text={props.text || 'Go back'}/>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default ErrorPage;
