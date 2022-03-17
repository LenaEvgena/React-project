import React from 'react';
import { useDispatch } from 'react-redux';
import Background from '../common/background/Background';
import FavorButton from '../main/favorButton/FavorButton';
import SearchForm from '../main/searchForm/SearchForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { toggleFavoriteList } from '../../redux/actions';
import { Link } from 'react-router-dom';
import './MoviesHeader.scss';

const MoviesHeader: React.FC = () => {
  const dispatch = useDispatch();
  const isFavorListOpen = useTypedSelector(state => state.isFavorListOpen)
  let text = !isFavorListOpen ? 'Show favorites' : 'Close favorites';

  return (
    <>
      <div className="movies__header">
        <Background />
        <div className="header__wrapper">
          <div className="header__logo">
            {isFavorListOpen ?
              <Link to='/'>
                <FavorButton handleClick={() => dispatch(toggleFavoriteList(false))} text={text} />
              </Link>
              :
              <Link to='/favorite'>
                <FavorButton handleClick={() => dispatch(toggleFavoriteList(true))} text={text} />
              </Link>
            }
          </div>
          <SearchForm />
        </div>
      </div>
    </>
  );
}

export default MoviesHeader;
