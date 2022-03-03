export const SET_MOVIES_ASYNC = 'MOVIES/SET_MOVIES_ASYNC';

const APIUrl = 'https://kinopoiskapiunofficial.tech';
const APIParams = '/api/v2.2/films/';
const token = '4fa525f3-c08b-4f89-8459-00b56e10d8eb';
const page = `page=${Math.floor(Math.random() * 20) + 1}`;


export function getMoviesAsync() {
  return async dispatch => {
    try {
      const res = await fetch(`${APIUrl}${APIParams}?type=FILM&${page}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': token,
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json();
      dispatch(setMoviesAsync(data));
    } catch (error) {
      console.log('Что-то пошло не так...');
    }
  }
}

export const setMoviesAsync = (movies) => ({
  type: SET_MOVIES_ASYNC,
  movies,
  totalCount: movies.items.length,
})

