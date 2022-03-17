import React from 'react';
import { useDispatch } from 'react-redux';
import Background from '../../common/background/Background';
import FavorButton from '../favorButton/FavorButton';
import ErrorBoundary from '../../common/errorBoundary/ErrorBoundary';
import SearchForm from '../searchForm/SearchForm';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { toggleFavoriteList } from '../../../redux/actions';
import './MoviesHeader.scss';

const MoviesHeader: React.FC = () => {
  const dispatch = useDispatch();
  const isFavorListOpen = useTypedSelector(state => state.isFavorListOpen)
  let text = !isFavorListOpen ? 'Show favorites' : 'Close favorites';

  const handleFavoriteClick = (): void => {
    if (isFavorListOpen) {
      dispatch(toggleFavoriteList(false));
    } else {
      dispatch(toggleFavoriteList(true));
    }
  }

  return (
    <>
      <ErrorBoundary>
        <div className="movies__header">
          <Background />
          <div className="header__wrapper">
            <div className="header__logo">
              <FavorButton handleClick={handleFavoriteClick} text={text} />
            </div>
            <SearchForm />
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
}

export default MoviesHeader;
