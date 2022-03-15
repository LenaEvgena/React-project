import React from 'react';
import './FavorButton.scss';

type PropsType = {
  text: string
  handleClick: () => void,
}

const FavorButton: React.FC<PropsType> = ({ text, handleClick }) => (
  <div className="logo__button">
    <button className="fav-button" type="button" onClick={handleClick}>{text}</button>
  </div>
);

export default FavorButton;
