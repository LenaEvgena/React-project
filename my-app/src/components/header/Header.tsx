import React from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../common/logoTitle/LogoTitle';
import './Header.scss'

const Header: React.FC = () => {
  return (
    <header className="header-bar">
      <LogoTitle />
      <Link to='/auth'>
        <button className="log_button" type="button">Log in</button>
      </Link>
    </header>
  );
}

export default Header;
