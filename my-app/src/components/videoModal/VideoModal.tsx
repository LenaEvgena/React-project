import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { ItemType, VideoItemType } from '../../types/types';
import Footer from '../footer/Footer';
import LogoTitle from '../logoTitle/LogoTitle';
import SubmitButton from '../submitButton/SubmitButton';
import './VideoModal.scss';

type PropsType = {
  movie: ItemType,
  video: VideoItemType,
  handleVideoModal: () => void;
}

const VideoModal: React.FC<PropsType> = ({ movie, video, handleVideoModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (modalRef.current?.contains(e.target as Element)) {
      return;
    }
    handleVideoModal();
  }

  return (
    <div className="video__modal">
      <div className="video__wrapper" onClick={handleOutsideClick}>
        <div className="video-logo">
          <LogoTitle />
        </div>
        <div className="video" ref={modalRef} >
          <div className="video-close" onClick={handleVideoModal}></div>
          <div className="video__content">
            <div className="video__screen">
              <ReactPlayer controls url={video?.url} width="500" />
            </div>
            <div className="video__title">
              <h2>{movie?.nameOriginal || movie?.nameRu}</h2>
              <div>{movie?.shortDescription || movie?.slogan}</div>
            </div>
          </div>
          <div className="video-button">
            <SubmitButton text="Back" handleClick={handleVideoModal} />
          </div>
        </div>
        <div className="video-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
