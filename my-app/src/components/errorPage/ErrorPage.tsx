import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/footer/Footer';
import ResetButton from '../common/resetButton/ResetButton';
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
            <ResetButton handleClick={handleClick} text={text || 'Go back'} />
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default ErrorPage;
