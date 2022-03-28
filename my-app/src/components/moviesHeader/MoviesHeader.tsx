import React from 'react';
import { useDispatch } from 'react-redux';
import Background from '../common/background/Background';
import FavorButton from './favorButton/FavorButton';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { toggleFavoriteList } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SearchForm from './searchForm/SearchForm';
import './MoviesHeader.scss';

const MoviesHeader: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useAuth();
  const { isFavorListOpen, favoriteList } = useTypedSelector(state => state)
  let text = !isFavorListOpen ? 'Show favorites' : 'Close favorites';

  const handleOpenClick = (): void => {
    if (!user) return;
    dispatch(toggleFavoriteList(true));
    navigate('/favorite');
  }

  const handleCloseClick = (): void => {
    if (!user) return;
    dispatch(toggleFavoriteList(false));
    navigate('/');
  }

  return (
    <>
      <div className="movies__header">
        <Background />
        <div className="header__wrapper">
          <div className="header__logo">
            {isFavorListOpen ?
              <FavorButton isBusy={!user} handleClick={handleCloseClick} length={favoriteList.length || 0} text={text} />
              :
              <FavorButton isBusy={!user} handleClick={handleOpenClick} length={favoriteList.length || 0} text={text} />
            }
          </div>
          <SearchForm />
        </div>
      </div>
    </>
  );
}

export default MoviesHeader;
