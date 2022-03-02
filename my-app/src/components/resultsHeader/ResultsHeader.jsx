import React from 'react';
import './ResultsHeader.scss';

const SortResultsHeader = () => (
  <div className="results__header">
    <div className="results__filter">
      <ul>
        <li className="active">All</li>
        <li>Documentary</li>
        <li>Drama</li>
        <li>Comedy</li>
        <li>Crime</li>
      </ul>
    </div>
    <div className="results__sort">
      <span>Sort by</span>
      <select className="select">
        <option value="1">Release date</option>
        <option value="2">Rating</option>
      </select>
    </div>
  </div>
);

export default SortResultsHeader;
