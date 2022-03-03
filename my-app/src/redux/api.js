import { setFetchedError, setMoviesAsync } from './actions';

const APIUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/?type=FILM';
const token = '4fa525f3-c08b-4f89-8459-00b56e10d8eb';

export function getMoviesAPI(query, currentPage) {
  return async dispatch => {
    try {
      const url = !query ? APIUrl : `${APIUrl}&keyword=${query}`
      const res = await fetch(`${url}&${currentPage}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': token,
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json();
      dispatch(setMoviesAsync(data));
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}
