import React from 'react';
import './FavorButton.scss';

const FavorButton = (props) => (
  <div className="logo__button">
    <button className="fav-button" type="button" onClick={props.handleClick}>{props.text}</button>
  </div>
);

export default FavorButton;
