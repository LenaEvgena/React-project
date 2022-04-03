import React from 'react';
import Button from '../button/Button';

const ScrollButton: React.FC = () => {
  const handleClick = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Button className='scroll__button' type='button' handleClick={handleClick} />
  )
};

export default ScrollButton;
