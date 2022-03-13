import { CloseDeleteMovieFormType, CloseMovieDetailsFormType, DeleteMovieByIdType, FilterGenreMoviesAsyncType, ItemType, MoviesType, OpenDeleteMovieFormType, RemoveFavoriteMovieType, SetCurrentPageType, SetFavoriteMovieType, SetFetchedErrorType, SetIsFetchingType, SetMovieByIDType, SetMoviesKeywordType, SetMovieType, SetVideoListType, SortMoviesAsyncType, ToggleFavoriteListType, VideoItemType } from "./../types/types";

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

export const setMoviesAsync = (movies: MoviesType): SetMovieType => ({
  type: SET_MOVIES_ASYNC,
  movies,
  totalCount: movies.total,
  total: movies.totalPages,
})

export const setCurrentPage = (page: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage: page,
})

export const setMovieByID = (movie: ItemType): SetMovieByIDType => ({
  type: SET_MOVIE_BY_ID,
  movie,
});

export const closeMovieDetailsForm = (): CloseMovieDetailsFormType => ({
  type: CLOSE_MOVIE_DETAILS_FORM,
});

export const setIsFetching = (bool: boolean): SetIsFetchingType => ({
  type: SET_IS_FETCHING,
  isFetching: bool,
})

export const setFetchedError = (bool: boolean): SetFetchedErrorType => ({
  type: SET_FETCHED_ERROR,
  isFetchedError: bool,
})

export const filterGenreMoviesAsync = (genre: string): FilterGenreMoviesAsyncType => ({
  type: FILTER_MOVIES_ASYNC,
  filter: genre,
})

export const sortMoviesAsync = (sortType: string): SortMoviesAsyncType => ({
  type: SORT_MOVIES_ASYNC,
  sortType,
})

export const setMoviesKeyword = (keyword: string): SetMoviesKeywordType => ({
  type: SEARCH_MOVIES_KEYWORD,
  keyword,
})

export const deleteMovieById = (id: number): DeleteMovieByIdType => ({
  type: DELETE_MOVIE,
  id,
})

export const openDeleteMovieForm = (id: number): OpenDeleteMovieFormType => ({
  type: OPEN_DELETE_MOVIE_FORM,
  id,
});

export const closeDeleteMovieForm = (): CloseDeleteMovieFormType => ({
  type: CLOSE_DELETE_MOVIE_FORM,
});

export const setFavoriteMovie = (id: number): SetFavoriteMovieType => ({
  type: SET_FAVORITE_MOVIE,
  id,
});

export const removeFavoriteMovie = (id: number): RemoveFavoriteMovieType => ({
  type: REMOVE_FAVORITE_MOVIE,
  id,
});

export const toggleFavoriteList = (bool: boolean): ToggleFavoriteListType => ({
  type: TOGGLE_FAVORITE_LIST,
  isFavorListOpen: bool,
});

export const setVideoList = (videos: Array<VideoItemType>): SetVideoListType => ({
  type: SET_VIDEO_LIST,
  videos,
});
