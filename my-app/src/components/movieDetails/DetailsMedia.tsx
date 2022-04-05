import React from 'react';
import classNames from 'classnames';
import Button from '../common/button/Button';
import { VideoItemType } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './MovieDetails.scss';

type PropsType = {
  itemVideo: VideoItemType
  handleClick: () => void
  handleFavoriteClick: (movie: number) => void
  isInFavorites: boolean
}

const DetailsMedia: React.FC<PropsType> = ({ itemVideo, handleClick, handleFavoriteClick, isInFavorites }) => {
  const { selectedByIdMovie } = useTypedSelector((state) => state);
  const cls = classNames('movie_icon-fav', { 'active': isInFavorites });

  const handleFavorite = () => {
    if (selectedByIdMovie) {
      handleFavoriteClick(selectedByIdMovie.kinopoiskId as number);
    }
  }

  return (
    <>
      <div className="details__aside">
        <div className="details__image">
          <i className={cls} onClick={handleFavorite}></i>
          <img className="image-cover" src={selectedByIdMovie?.posterUrl || selectedByIdMovie?.posterUrlPreview} alt={selectedByIdMovie?.nameOriginal || selectedByIdMovie?.nameRu as string} />
        </div>
        <Button className='submit__button' type='button' text='Video' isBusy={!itemVideo} handleClick={handleClick} />
      </div>
    </>
  );
}

export default DetailsMedia;
