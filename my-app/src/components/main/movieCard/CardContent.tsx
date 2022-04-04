import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MovieItemType } from '../../../types/types';
import './MovieCard.scss';

type PropsType = {
  data: MovieItemType,
  path: string,
}

const CardContent: React.FC<PropsType> = ({ data, path }) => {
  const genresList: Array<string> = useMemo(() => data.genres?.map((g) => g.genre) ?? [], [data]);
  const countriesList: Array<string> = useMemo(() => data.countries?.map((c) => c.country) ?? [], [data]);

  return (
    <div className="movie__description">
      <div className="movie__title">
        <h3>
          <Link to={path}>{data.nameOriginal || data.nameRu}</Link>
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
  );
}

export default CardContent;
