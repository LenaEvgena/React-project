import React, { useCallback, useEffect } from 'react'
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setFavoriteMovieList, toggleFavoriteList } from '../../redux/actions';
import { auth } from '../../firebase';
import Header from './headerComponent/Header';
import useAuth from '../../hooks/useAuth';
import useCollection from '../../hooks/useCollection';
import { FavoriteMoviesType } from '../../types/types';

const HeaderContainer: React.FC = () => {
  const dispatch = useDispatch();
  const user = useAuth();
  const { favorites } = useCollection();

  const getUser = useCallback(() => {
    if (user && favorites) {
      dispatch(setFavoriteMovieList(favorites as Array<FavoriteMoviesType>));
    }
  }, [user, favorites, dispatch])

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleLogout = async () => {
    signOut(auth).then(() => {
      dispatch(toggleFavoriteList(false));
      dispatch(setFavoriteMovieList([]));
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <Header user={user} handleLogout={handleLogout} />
  );
}

export default HeaderContainer;
