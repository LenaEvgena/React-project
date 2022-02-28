import React from 'react';
import './ResetButton.scss';

const ResetButton = (props) => (
  <button className="reset__button" type="reset" onClick={props.handleReset}>{props.text}</button>
);

export default ResetButton;
