import React from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../../common/logoTitle/LogoTitle';
import { UserImplType } from '../../../types/types';
import './Header.scss'

type PropsType = {
  user: UserImplType,
  handleLogout: () => void,
}

const Header: React.FC<PropsType> = ({ user, handleLogout }) => {
  return (
    <header className="header-bar">
      <LogoTitle />
      {user ?
        <Link to='/'>
          <button className="log_button" data-tooltip={user.email} type="button" onClick={handleLogout}>Log out</button>
        </Link>
        :
        <Link to='/auth'>
          <button className="log_button" type="button">Log in</button>
        </Link>
      }
    </header>
  );
}

export default Header;
