import React from 'react';
import classNames from 'classnames';
import './Button.scss';

type PropsType = {
  type: 'button' | 'submit' | 'reset',
  text?: string,
  className: string,
  isBusy?: boolean,
  disabled?: boolean,
  tooltip?: string,
  handleClick?: () => void,
}

const Button: React.FC<PropsType> = ({ type, text, isBusy, className, handleClick, ...args }) => {
  let cls = classNames(
    'button',
    className,
    { 'busy': isBusy }
  );

  return (
    <button className={cls} type={type} onClick={handleClick} disabled={isBusy} data-tooltip={args.tooltip}>{text}</button>
  )
};

export default Button;
