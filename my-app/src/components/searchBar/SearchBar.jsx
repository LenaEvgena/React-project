import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  const [inputQuery, setInputQuery] = useState('');
  const APIUrl = 'https://kinopoiskapiunofficial.tech';
  const APIParams = '/api/v2.2/films/';
  const token = '4fa525f3-c08b-4f89-8459-00b56e10d8eb';

  const searchMovieAPI = async () => {
    try {
      await fetch(`${APIUrl}${APIParams}?keyword=${inputQuery}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': token,
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => console.log(data))
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleChange = ({ target }) => setInputQuery(target.value);

  const handleClick = () => {
    searchMovieAPI();
    setInputQuery('');
  }

  return (
    <div className="search">
      <input className="search__field" type="text" placeholder="What do you want to watch? Enter a keyword..." value={inputQuery} onChange={handleChange} />
      <button className="search__button" type="button" onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
