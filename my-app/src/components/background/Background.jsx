import React from 'react';
import headerImage from "./../../assets/poster.jpeg";
import './Background.scss';

const Background = (props) => (
  <div className="header__image">
    <img src={headerImage} alt="posters" className="background__image" />
  </div>
);

export default Background;
