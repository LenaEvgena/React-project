import React from 'react';
import './FavorButton.scss';

type PropsType = {
  text: string,
  isBusy: boolean,
  handleClick: () => void,
}

const FavorButton: React.FC<PropsType> = ({ text, isBusy, handleClick }) => {
  return (
    <div className="logo__button">
      <button className={`fav-button ${isBusy ? 'busy' : ''}`}  type="button" onClick={handleClick}>{text}</button>
    </div>
  );
}

export default FavorButton;
