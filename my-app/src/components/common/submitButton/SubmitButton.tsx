import React from 'react';
import classNames from 'classnames';
import './SubmitButton.scss';

type PropsType = {
  text: string
  isBusy?: boolean
  handleClick?: () => void,
}

const SubmitButton: React.FC<PropsType> = ({ text, isBusy, handleClick }) => {
  let cls = classNames('submit__button', { 'busy': isBusy });

  return (
    <button className={cls} type="submit" onClick={handleClick}>{text}</button>
  )
};

export default SubmitButton;
