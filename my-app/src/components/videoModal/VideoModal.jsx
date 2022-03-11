import React from 'react';
import ReactPlayer from 'react-player';
import Footer from '../footer/Footer';
import LogoTitle from '../logoTitle/LogoTitle';
import SubmitButton from '../submitButton/SubmitButton';
import './VideoModal.scss';

const VideoModal = (props) => {
  const modalRef = React.createRef();

  const handleOutsideClick = (event) => {
    if (modalRef.current.contains(event.target)) {
      return;
    }
    props.handleVideoModal();
  }

  return (
    <div className="video__modal">
      <div className="video__wrapper" onClick={handleOutsideClick}>
        <div className="video-logo">
          <LogoTitle />
        </div>
        <div className="video" ref={modalRef} >
          <div className="video-close" onClick={props.handleVideoModal}></div>
          <div className="video__content">
            <div className="video__screen">
              <ReactPlayer controls url={props.video?.url} width="500" />
            </div>
            <div className="video__title">
              <h2>{props.movie?.nameOriginal || props.movie?.nameRu}</h2>
              <div>{props.movie?.shortDescription || props.movie?.slogan}</div>
            </div>
          </div>
          <div className="video-button">
            <SubmitButton text="Back" handleClick={props.handleVideoModal} />
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
