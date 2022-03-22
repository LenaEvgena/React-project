import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../common/logoTitle/LogoTitle';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { removeAuthName, removeAuthPassword, setAuthName, setFavoriteMovieList, toggleFavoriteList } from '../../redux/actions';
import { auth, firestore } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Header.scss'

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [user]: any = useAuthState(auth);
  const { userName } = useTypedSelector(state => state)
  const [favorites]: Array<any> = useCollectionData(collection(firestore, user?.email || 'favorites')); //получение данных из firestore

  const handleLogout = async () => {
    signOut(auth).then(() => {
      dispatch(removeAuthName(''));
      dispatch(removeAuthPassword(''));
      dispatch(toggleFavoriteList(false));
      dispatch(setFavoriteMovieList([]));
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    if (user && !userName) {
      dispatch(setAuthName(user?.email))
    };
  }, []);

  useEffect(() => {
    if (user && favorites) {
      dispatch(setFavoriteMovieList(favorites));
    }
  }, [favorites]);

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
