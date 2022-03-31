import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { ItemType } from '../../../types/types';
import { openDeleteMovieForm } from '../../../redux/actions';
import useAuth from '../../../hooks/useAuth';
import './MovieCard.scss';

type PropsType = {
  data: ItemType,
  path: string,
  isFavoriteMovie: boolean,
  handleFavoriteClick: (movie: number) => void
}

const CardMedia: React.FC<PropsType> = ({ data, handleFavoriteClick, isFavoriteMovie, path }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const user = useAuth();
  let text = 'Please, register or log in';
  let cls = classNames('movie_icon-fav', { 'active': isFavoriteMovie });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    navigate(path);
    handleCloseOptions();
    e.stopPropagation();
  }

  const handleOptions = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setShowOptions(!showOptions);
  }

  const handleCloseOptions = (): void => {
    setShowOptions(false);
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseOptions);
    return () => {
      document.removeEventListener('click', handleCloseOptions);
    }
  });

  return (
    <div className="movie__image">
      <i className={cls} data-tool={!user ? text : null} onClick={() => handleFavoriteClick(data.kinopoiskId as number)}></i>
      <img className="movie__card" src={data.posterUrl || data.posterUrlPreview} alt={data.nameOriginal || data.nameRu as string} onClick={handleClick} />

      {!showOptions ?
        <div className="dots" onClick={handleOptions}></div> :
        <div className="options__modal">
          <div className="options-close" onClick={handleOptions} >x</div>
          <div className="options-edit" onClick={() => handleFavoriteClick(data.kinopoiskId as number)}>
            {!isFavoriteMovie ? 'Add to favorites' : 'Remove from favorites'}
          </div>
          <div className="options-delete" onClick={() => dispatch(openDeleteMovieForm(data.kinopoiskId as number))}>Delete</div>
        </div>}
    </div>
  );
}

export default CardMedia;
