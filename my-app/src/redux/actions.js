export const SET_MOVIES_ASYNC = 'MOVIES/SET_MOVIES_ASYNC';
export const SET_CURRENT_PAGE = 'MOVIES/SET_CURRENT_PAGE';
export const SET_IS_FETCHING = 'MOVIES/SET_IS_FETCHING';
export const SET_FETCHED_ERROR = 'ERROR/SET_FETCHED_ERROR';
export const FILTER_MOVIES_ASYNC = 'MOVIES/FILTER_MOVIES_ASYNC';
export const SORT_MOVIES_ASYNC = 'MOVIES/SORT_MOVIES_ASYNC';
export const SEARCH_MOVIES_KEYWORD = 'MOVIES/SEARCH_MOVIES_KEYWORD';
export const DELETE_MOVIE = 'MOVIES/DELETE_MOVIE';
export const OPEN_DELETE_MOVIE_FORM = 'MOVIES/OPEN_DELETE_MOVIE_FORM';
export const CLOSE_DELETE_MOVIE_FORM = 'MOVIES/CLOSE_DELETE_MOVIE_FORM';

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

export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  isFetching: bool,
})

export const setFetchedError = (bool) => ({
  type: SET_FETCHED_ERROR,
  isFetchedError: bool,
})

export const filterGenreMoviesAsync = (genre) => ({
  type: FILTER_MOVIES_ASYNC,
  filter: genre,
})

export const sortMoviesAsync = (sortType) => ({
  type: SORT_MOVIES_ASYNC,
  sortType,
})

export const setMoviesKeyword = (keyword) => ({
  type: SEARCH_MOVIES_KEYWORD,
  keyword,
})

export const deleteMovieById = (id) => ({
  type: DELETE_MOVIE,
  id,
})

export const openDeleteMovieForm = (id) => ({
  type: OPEN_DELETE_MOVIE_FORM,
  id,
});

export const closeDeleteMovieForm = () => ({
  type: CLOSE_DELETE_MOVIE_FORM,
});

