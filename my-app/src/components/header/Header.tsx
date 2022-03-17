import React from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../common/logoTitle/LogoTitle';
import './Header.scss'

const Header: React.FC = () => {
  return (
    <header className="header-bar">
      <LogoTitle />
      <div className="header_buttons">
        <Link to='/auth'>
          <button className="log_button" type="button">Log in</button>
        </Link>
        <Link to='/register'>
          <button className="log_button" type="button">Register</button>
        </Link>

      </div>
    </header>
  );
}

export default Header;
