import React from 'react';
import './FavorButton.scss';

type PropsType = {
  text: string,
  isBusy: boolean,
  length: number,
  handleClick: () => void,
}

const FavorButton: React.FC<PropsType> = ({ text, isBusy, length, handleClick }) => {
  return (
    <div className="logo__button" data-toolt={length}>
      <button className={`fav-button ${isBusy ? 'busy' : ''}`} type="button" onClick={handleClick}>{text}</button>
    </div>
  );
}

export default FavorButton;
