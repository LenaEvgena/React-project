import React from 'react';
import './SubmitButton.scss';

type PropsType = {
  text: string
  busy?: boolean
  handleClick: () => void,
}

const SubmitButton: React.FC<PropsType> = (props) => (
  <button className={`submit__button ${props.busy ? 'busy' : ''}`} type="submit" onClick={props.handleClick}>{props.text}</button>
);

export default SubmitButton;
