import React from 'react';
import './ResetButton.scss';

type PropsType = {
  text: string
  handleClick?: () => void,
}

const ResetButton: React.FC<PropsType> = (props) => (
  <button className="reset__button" type="reset" onClick={props.handleClick}>{props.text}</button>
);

export default ResetButton;
