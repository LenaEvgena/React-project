import React from 'react';
import './SubmitButton.scss';

const SubmitButton = (props) => (
  <button className={`submit__button ${props.busy ? 'busy' : ''}`} type="submit" onClick={props.handleClick}>{props.text}</button>
);

export default SubmitButton;
