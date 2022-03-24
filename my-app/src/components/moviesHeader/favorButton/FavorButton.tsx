import React from 'react';
import classNames from 'classnames';
import Button from '../../common/button/Button';
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
      <Button className={cls} type='button' text={text} handleClick={handleClick} />
    </div>
  );
}

export default FavorButton;
