import React from 'react';
import './SubmitButton.scss';

type PropsType = {
  text: string
  isBusy?: boolean
  handleClick: () => void,
}

const SubmitButton: React.FC<PropsType> = ({ text, isBusy, handleClick }) => (
  <button className={`submit__button ${isBusy ? 'busy' : ''}`} type="submit" onClick={handleClick}>{text}</button>
);

export default SubmitButton;
