import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/button/Button';
import './ErrorPage.scss';

type PropsType = {
  text?: string
  handleClick?: () => void,
}

const ErrorPage: React.FC<PropsType> = ({ text, handleClick }) => (
  <>
    <div className="error">
      <div className="error__wrapper">
        <div className="error_content">
          <h2 className="error_text">Page not Found</h2>
          <p className="error_num">404</p>
          <Link to="/">
            <Button className='reset__button' type='reset' text={text || 'Go back'} handleClick={handleClick} />
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default ErrorPage;
