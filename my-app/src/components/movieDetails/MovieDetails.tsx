import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../common/background/Background';
import VideoModal from '../modals/videoModal/VideoModal';
import DetailsMedia from './DetailsMedia';
import DetailsContent from './DetailsContent';
import { MovieItemType, VideoItemType } from '../../types/types';
import './MovieDetails.scss';

type PropsType = {
  showVideoModal: boolean,
  isInFavorites: boolean,
  selectedByIdMovie: MovieItemType,
  itemVideo: VideoItemType,
  pathTo: string,
  handleClick: () => void,
  handleCloseClick: () => void,
  handleFavoriteClick: (id: number) => void,
}

const MovieDetails: React.FC<PropsType> = ({ showVideoModal, selectedByIdMovie, itemVideo, pathTo, isInFavorites, handleClick, handleCloseClick, handleFavoriteClick }) => {
  return (
    <>
      {showVideoModal && <VideoModal movie={selectedByIdMovie} video={itemVideo} handleVideoModal={handleClick} />}

      <div className="movie__details">
        <Background />
        <div className="details">
          <div className="details__header">
            <Link to={pathTo} className="details-search" type="button" onClick={handleCloseClick}></Link>
          </div>
          <div className="details__container">
            <DetailsMedia itemVideo={itemVideo} handleClick={handleClick} handleFavoriteClick={handleFavoriteClick} isInFavorites={isInFavorites} />
            <DetailsContent />
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
