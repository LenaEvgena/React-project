import React from 'react';
import './AddButton.scss';

const AddButton = (props) => (
  <div className="logo__button">
    <button className="fav-button" type="button" onClick={props.handleClick}>Favorites</button>
  </div>
);

export default AddButton;
