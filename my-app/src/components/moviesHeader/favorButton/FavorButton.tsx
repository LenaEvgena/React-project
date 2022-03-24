import React from 'react';
import classNames from 'classnames';
import './FavorButton.scss';

type PropsType = {
  text: string,
  isBusy: boolean,
  length: number,
  handleClick: () => void,
}

const FavorButton: React.FC<PropsType> = ({ text, isBusy, length, handleClick }) => {
  let cls = classNames('fav-button', { 'busy': isBusy });

  return (
    <div className="logo__button" data-toolt={length}>
      <button className={cls} type="button" onClick={handleClick}>{text}</button>
    </div>
  );
}

export default FavorButton;
