import React from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../common/logoTitle/LogoTitle';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { removeAuthName, removeAuthPassword } from '../../redux/actions';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.scss'

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  console.log('useAuthState', user);

  const handleLogout = async () => {
    signOut(auth).then(() => {
      dispatch(removeAuthName(''));
      dispatch(removeAuthPassword(''));
    }).catch((error) => {
      console.log(error);
    });
  }

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
