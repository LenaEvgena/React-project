import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setFavoriteMovieList, toggleFavoriteList } from '../../redux/actions';
import { auth, firestore } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FavoriteMoviesType, UserImplType } from '../../types/types';
import Header from './headerComponent/Header';

const HeaderContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth) as UserImplType[];
  const [favorites] = useCollectionData(collection(firestore, user?.email || 'favorites')); //получение данных из firestore

  const handleLogout = async () => {
    signOut(auth).then(() => {
      dispatch(toggleFavoriteList(false));
      dispatch(setFavoriteMovieList([]));
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    if (user && favorites) {
      dispatch(setFavoriteMovieList(favorites as Array<FavoriteMoviesType>));
    }
  }, [favorites]);

  return (
    <Header user={user} handleLogout={handleLogout} />
  );
}

export default HeaderContainer;
