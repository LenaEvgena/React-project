import React from 'react';
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
              <video className="video__window" width="500" height="auto" src="https://www.youtube.com/v/tpUDctrOPr4" poster={props.movie?.posterUrl || props.movie?.posterUrlPrevie} controls></video>
              {/* <iframe is="x-frame-bypass" src="https://widgets.kinopoisk.ru/discovery/trailer/88184?onlyPlayer=1&autoplay=1&cover=1" width="500" height="500" title={props.movie?.nameRu}></iframe> */}
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
