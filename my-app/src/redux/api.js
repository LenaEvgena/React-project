import { setFetchedError, setIsFetching, setMoviesAsync } from './actions';

const APIUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/?type=FILM';
const token = '4fa525f3-c08b-4f89-8459-00b56e10d8eb';
const yearSorting = 'yearFrom=1000&yearTo=2021';

export const getMoviesAPI = (currentPage, sortType = 'RATING', genre) => {
  return async dispatch => {
    try {
      let genreType;
      switch (genre) {
        case 'all':
          genreType = '';
          break;
        case 'melodrama':
          genreType = 4;
          break;
        case 'drama':
          genreType = 2;
          break;
        case 'thriller':
          genreType = 1;
          break;
        case 'crime':
          genreType = 3;
          break;
        default:
          genreType = '';
          break;
      }

      const url = (sortType === 'RATING') ? `${APIUrl}&order=${sortType}` : `${APIUrl}&order=${sortType}&${yearSorting}`;

      dispatch(setIsFetching(true));
      const res = await fetch(`${url}&genres=${genreType}&page=${currentPage}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': token,
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch(setMoviesAsync(data));
      dispatch(setIsFetching(false));
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}

export const searchMoviesAPI = (query, currentPage) => {
  return async dispatch => {
    try {
      const url = !query ? APIUrl : `${APIUrl}&order=RATING&keyword=${query}`;

      dispatch(setIsFetching(true));
      const res = await fetch(`${url}&page=${currentPage}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': token,
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch(setMoviesAsync(data));
      dispatch(setIsFetching(false));
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}
