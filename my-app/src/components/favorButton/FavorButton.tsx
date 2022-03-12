import React from 'react';
import './FavorButton.scss';


type PropsType = {
  text: string
  handleClick: () => void,
}

const FavorButton: React.FC<PropsType> = (props) => (
  <div className="logo__button">
    <button className="fav-button" type="button" onClick={props.handleClick}>{props.text}</button>
  </div>
);

export default FavorButton;
