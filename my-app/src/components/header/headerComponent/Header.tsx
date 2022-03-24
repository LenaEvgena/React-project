import React from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../../common/logoTitle/LogoTitle';
import Button from '../../common/button/Button';
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
          <Button className='log_button' type='button' text='Log out'  handleClick={handleLogout} tooltip={user.email} />
        </Link>
        :
        <Link to='/auth'>
          <Button className='log_button' type='button' text='Log in' />
        </Link>
      }
    </header>
  );
}

export default Header;
