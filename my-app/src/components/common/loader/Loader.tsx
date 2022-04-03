import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => (
  <div className="loader">
    <div className="loader_image"></div>
    <div className="loading">Loading...</div>
  </div>
);

export default Loader;
