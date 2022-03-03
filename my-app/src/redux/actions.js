const APIUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/?type=FILM';
const token = '4fa525f3-c08b-4f89-8459-00b56e10d8eb';

export const SET_MOVIES_ASYNC = 'MOVIES/SET_MOVIES_ASYNC';
export const SET_CURRENT_PAGE = 'MOVIES/SET_CURRENT_PAGE';
export const SET_FETCHED_ERROR = 'ERROR/SET_FETCHED_ERROR';

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

export const setMoviesAsync = (movies) => ({
  type: SET_MOVIES_ASYNC,
  movies,
  totalCount: movies.total,
  total: movies.totalPages,
})

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  currentPage: page,
})

export const setFetchedError = (bool) => ({
  type: SET_FETCHED_ERROR,
  isFetchedError: bool,
})
