import React from 'react';
import './ScrollButton.scss';

const ScrollButton: React.FC = () => {

  const handleClick = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button className="scroll__button" type="button" onClick={handleClick}></button>
  )
};

export default ScrollButton;
