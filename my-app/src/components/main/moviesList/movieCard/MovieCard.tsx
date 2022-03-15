import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './MovieCard.scss';
import { ItemType } from '../../../../types/types';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { openDeleteMovieForm, removeFavoriteMovie, setFavoriteMovie } from '../../../../redux/actions';
import DeleteModal from '../../../modals/deleteModal/DeleteModal';

type PropsType = {
  data: ItemType
}

const MovieCard: React.FC<PropsType> = ({ data }) => {
  const dispatch = useDispatch();
  const { isDeleteFormOpen, favoriteMovies } = useTypedSelector(state => state);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  let genresList: Array<string> = [];
  let countriesList: Array<string> = [];

  data.genres!.map((g) => genresList.push(g.genre));
  data.countries!.map((c) => countriesList.push(c.country));

  const isFavorite = (id: number) => favoriteMovies.some((item) => item.kinopoiskId === id);

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

  const handleFavoriteClick = (id: number): void => {
    if (isFavorite(id)) {
      dispatch(removeFavoriteMovie(id));
    } else {
      dispatch(setFavoriteMovie(id));
    }
  }

  return (
    <div className="movie">
      <div className="movie__image">
        <i className={`movie_icon-fav ${isFavorite(data.kinopoiskId as number) ? 'active' : ''}`} onClick={() => handleFavoriteClick(data.kinopoiskId as number)}></i>
        <img className="movie__card" src={data.posterUrl || data.posterUrlPreview} alt={data.nameOriginal || data.nameRu as string} />

        {!showOptions ?
          <div className="dots" onClick={handleOptions}></div>
          : <div className="options__modal">
            <div className="options-close" onClick={handleOptions} >x</div>
            <div className="options-edit" onClick={() => handleFavoriteClick(data.kinopoiskId as number)}>
              {!isFavorite(data.kinopoiskId as number) ? 'Add to favorites' : 'Remove from favorites'}
            </div>
            <div className="options-delete" onClick={() => dispatch(openDeleteMovieForm(data.kinopoiskId as number))}>Delete</div>
          </div>}

        {isDeleteFormOpen && <DeleteModal />}

      </div>

      <div className="movie__description">
        <div className="movie__title">
          <h3>
            <Link to={`/movie/${data.kinopoiskId}`}>{data.nameOriginal || data.nameRu}</Link>
          </h3>
          <p className="movie__date">
            {data.year}
          </p>
        </div>

        <div className="movie__country">
          {countriesList.join(', ')}
        </div>
        <div className="movie__genre">
          {genresList.join(', ')}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
