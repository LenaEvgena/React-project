import React, { useCallback, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ItemType } from '../../../types/types';
import './MovieCard.scss';

type PropsType = {
  data: ItemType,
  path: string,
}

const CardContent: React.FC<PropsType> = ({ data, path }) => {
  let genresList: Array<string> = useMemo(() => [], []);
  let countriesList: Array<string> = useMemo(() => [], []);

  const getInfo = useCallback(
    () => {
      data.genres?.map((g) => genresList.push(g.genre));
      data.countries?.map((c) => countriesList.push(c.country));
    },
    [genresList, countriesList, data.genres, data.countries],
  )

  useEffect(() => {
    getInfo();
  }, [getInfo])


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
