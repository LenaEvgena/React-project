import React from 'react';
import Footer from '../footer/Footer';
import LogoTitle from '../logoTitle/LogoTitle';
import SubmitButton from '../submitButton/SubmitButton';
import './VideoModal.scss';
import { useSelector } from 'react-redux';

const VideoModal = (props) => {
  const modalRef = React.createRef();
  const video = useSelector(state => state.video);
  console.log(video);

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
              <video className="video__window" width="500" height="auto" src={video?.url} poster={props.movie?.posterUrl || props.movie?.posterUrlPrevie} controls></video>
              {/* <iframe is="x-frame-bypass" src={video?.url} width="500" height="500" title={props.movie?.nameRu}></iframe> */}
            </div>
            <div className="video__title">
              {!video.length ? <h2>Видео недоступно</h2> :
              <>
                <h2>{props.movie?.nameOriginal || props.movie?.nameRu}</h2>
                <div>{props.movie?.shortDescription || props.movie?.slogan}</div>
              </>
              }
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
