import React from 'react';
import classNames from 'classnames';
import './SubmitButton.scss';

type PropsType = {
  type: 'button' | 'submit' | 'reset',
  text: string,
  className: string,
  isBusy?: boolean,
  disabled?: boolean,
  handleClick?: () => void,
}

const Button: React.FC<PropsType> = ({ type, text, isBusy, className, handleClick }) => {
  let cls = classNames(
    'button',
    className,
    { 'busy': isBusy }
  );

  return (
    <button className={cls} type={type} onClick={handleClick} disabled={isBusy}>{text}</button>
  )
};

export default Button;
