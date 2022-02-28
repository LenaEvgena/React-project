import React from 'react';
import './AddButton.scss';

const AddButton = (props) => (
  <div className="logo__button">
    <button className="add-button" type="button" onClick={props.handleMovieModal}>+ Add movie</button>
  </div>
);

export default AddButton;
