export const SET_MOVIES_ASYNC = 'MOVIES/SET_MOVIES_ASYNC';
export const SET_CURRENT_PAGE = 'MOVIES/SET_CURRENT_PAGE';
export const SET_MOVIE_BY_ID = 'MOVIES/SET_MOVIE_BY_ID';
export const CLOSE_MOVIE_DETAILS_FORM = 'MOVIES/CLOSE_MOVIE_DETAILS_FORM';
export const SET_IS_FETCHING = 'MOVIES/SET_IS_FETCHING';
export const SET_FETCHED_ERROR = 'ERROR/SET_FETCHED_ERROR';
export const FILTER_MOVIES_ASYNC = 'MOVIES/FILTER_MOVIES_ASYNC';
export const SORT_MOVIES_ASYNC = 'MOVIES/SORT_MOVIES_ASYNC';
export const SEARCH_MOVIES_KEYWORD = 'MOVIES/SEARCH_MOVIES_KEYWORD';
export const DELETE_MOVIE = 'MOVIES/DELETE_MOVIE';
export const OPEN_DELETE_MOVIE_FORM = 'MOVIES/OPEN_DELETE_MOVIE_FORM';
export const CLOSE_DELETE_MOVIE_FORM = 'MOVIES/CLOSE_DELETE_MOVIE_FORM';
export const SET_FAVORITE_MOVIE = 'MOVIES/SET_FAVORITE_MOVIE';
export const REMOVE_FAVORITE_MOVIE = 'MOVIES/REMOVE_FAVORITE_MOVIE';
export const TOGGLE_FAVORITE_LIST = 'MOVIES/TOGGLE_FAVORITE_LIST';
export const SET_VIDEO_LIST = 'MOVIES/SET_VIDEO_LIST';

type SetMovieType = {
  type: typeof SET_MOVIES_ASYNC,
  movies: [] | null,
  totalCount: number,
  total: number,
}

export const setMoviesAsync = (movies: any): SetMovieType => ({
  type: SET_MOVIES_ASYNC,
  movies,
  totalCount: movies.total,
  total: movies.totalPages,
})

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number,
}

export const setCurrentPage = (page: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage: page,
})

type SetMovieByIDType = {
  type: typeof SET_MOVIE_BY_ID,
  movie: {}
}

export const setMovieByID = (movie: {}): SetMovieByIDType => ({
  type: SET_MOVIE_BY_ID,
  movie,
});

type CloseMovieDetailsFormType = {
  type: typeof CLOSE_MOVIE_DETAILS_FORM,
}

export const closeMovieDetailsForm = (): CloseMovieDetailsFormType => ({
  type: CLOSE_MOVIE_DETAILS_FORM,
});

type SetIsFetchingType = {
  type: typeof SET_IS_FETCHING,
  isFetching: boolean,
}

export const setIsFetching = (bool: boolean): SetIsFetchingType => ({
  type: SET_IS_FETCHING,
  isFetching: bool,
})

type SetFetchedErrorType = {
  type: typeof SET_FETCHED_ERROR,
  isFetchedError: boolean,
}

export const setFetchedError = (bool: boolean): SetFetchedErrorType => ({
  type: SET_FETCHED_ERROR,
  isFetchedError: bool,
})

type FilterGenreMoviesAsyncType = {
  type: typeof FILTER_MOVIES_ASYNC,
  filter: string,
}

export const filterGenreMoviesAsync = (genre: string): FilterGenreMoviesAsyncType => ({
  type: FILTER_MOVIES_ASYNC,
  filter: genre,
})

type SortMoviesAsyncType = {
  type: typeof SORT_MOVIES_ASYNC,
  sortType: string
}

export const sortMoviesAsync = (sortType: string): SortMoviesAsyncType => ({
  type: SORT_MOVIES_ASYNC,
  sortType,
})

type SetMoviesKeywordType = {
  type: typeof SEARCH_MOVIES_KEYWORD,
  keyword: string
}

export const setMoviesKeyword = (keyword: string): SetMoviesKeywordType => ({
  type: SEARCH_MOVIES_KEYWORD,
  keyword,
})

type DeleteMovieByIdType = {
  type: typeof DELETE_MOVIE,
  id: number,
}

export const deleteMovieById = (id: number): DeleteMovieByIdType => ({
  type: DELETE_MOVIE,
  id,
})

type OpenDeleteMovieFormType = {
  type: typeof OPEN_DELETE_MOVIE_FORM,
  id: number,
}

export const openDeleteMovieForm = (id: number): OpenDeleteMovieFormType => ({
  type: OPEN_DELETE_MOVIE_FORM,
  id,
});

type CloseDeleteMovieFormType = {
  type: typeof CLOSE_DELETE_MOVIE_FORM,
}

export const closeDeleteMovieForm = (): CloseDeleteMovieFormType => ({
  type: CLOSE_DELETE_MOVIE_FORM,
});

type SetFavoriteMovieType = {
  type: typeof SET_FAVORITE_MOVIE,
  id: number
}

export const setFavoriteMovie = (id: number): SetFavoriteMovieType => ({
  type: SET_FAVORITE_MOVIE,
  id,
});

type RemoveFavoriteMovieType = {
  type: typeof REMOVE_FAVORITE_MOVIE,
  id: number
}

export const removeFavoriteMovie = (id: number): RemoveFavoriteMovieType => ({
  type: REMOVE_FAVORITE_MOVIE,
  id,
});

type ToggleFavoriteListType = {
  type: typeof TOGGLE_FAVORITE_LIST,
  isFavorListOpen: boolean,
}

export const toggleFavoriteList = (bool: boolean): ToggleFavoriteListType => ({
  type: TOGGLE_FAVORITE_LIST,
  isFavorListOpen: bool,
});

type SetVideoListType = {
  type: typeof SET_VIDEO_LIST,
  videos: []
}

export const setVideoList = (videos: []): SetVideoListType => ({
  type: SET_VIDEO_LIST,
  videos,
});
