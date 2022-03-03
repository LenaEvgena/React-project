export const SET_MOVIES_ASYNC = 'MOVIES/SET_MOVIES_ASYNC';
export const SET_CURRENT_PAGE = 'MOVIES/SET_CURRENT_PAGE';
export const SET_FETCHED_ERROR = 'ERROR/SET_FETCHED_ERROR';

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
