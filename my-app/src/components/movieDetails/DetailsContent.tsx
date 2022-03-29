import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './MovieDetails.scss';

const DetailsContent: React.FC = () => {
  const { selectedByIdMovie } = useTypedSelector((state) => state);

  return (
    <>
      <div className="details__content">
        <div className="content-title">
          <h2 className="content-movie_title">
            {selectedByIdMovie?.nameOriginal || selectedByIdMovie?.nameRu}
          </h2>
          {selectedByIdMovie?.ratingKinopoisk &&
            <div className="content-vote_average">
              {selectedByIdMovie!.ratingKinopoisk}
            </div>}
        </div>

        <div className="content-tagline">
          {selectedByIdMovie?.slogan || selectedByIdMovie?.nameRu}
          <div>{selectedByIdMovie?.shortDescription}</div>
        </div>

        <div className="content-info">
          <span className="content-info_date">
            {selectedByIdMovie?.year}
          </span>
          <span className="content-info_runtime">
            {selectedByIdMovie?.serial || selectedByIdMovie?.filmLength ?
              selectedByIdMovie?.serial ? `${selectedByIdMovie?.filmLength} series` : `${selectedByIdMovie?.filmLength} min`
              : ''}
          </span>
        </div>

        <div className="content-overview">
          {selectedByIdMovie?.description || 'Описание фильма временно не доступно'}
        </div>
      </div>
    </>
  );
}

export default DetailsContent;
