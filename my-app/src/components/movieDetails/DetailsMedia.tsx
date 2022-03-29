import React from 'react';
import Button from '../common/button/Button';
import { VideoItemType } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './MovieDetails.scss';

type PropsType = {
  itemVideo: VideoItemType
  handleClick: () => void
  handleFavoriteClick: (movie: number) => void
  cls: string
}

const DetailsMedia: React.FC<PropsType> = ({ itemVideo, handleClick, handleFavoriteClick, cls }) => {
  const { selectedByIdMovie } = useTypedSelector((state) => state);

  return (
    <>
      <div className="details__aside">
        <div className="details__image">
          <i className={cls} onClick={() => handleFavoriteClick(selectedByIdMovie?.kinopoiskId as number)}></i>
          <img className="image-cover" src={selectedByIdMovie?.posterUrl || selectedByIdMovie?.posterUrlPreview} alt={selectedByIdMovie?.nameOriginal || selectedByIdMovie?.nameRu as string} />
        </div>
        <Button className='submit__button' type='button' text='Video' isBusy={!itemVideo} handleClick={handleClick} />
      </div>
    </>
  );
}

export default DetailsMedia;
