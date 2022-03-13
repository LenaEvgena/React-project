import { CLOSE_DELETE_MOVIE_FORM, CLOSE_MOVIE_DETAILS_FORM, DELETE_MOVIE,
  FILTER_MOVIES_ASYNC, OPEN_DELETE_MOVIE_FORM, REMOVE_FAVORITE_MOVIE,
  SEARCH_MOVIES_KEYWORD, SET_CURRENT_PAGE, SET_FAVORITE_MOVIE, SET_FETCHED_ERROR,
  SET_IS_FETCHING, SET_MOVIES_ASYNC, SET_MOVIE_BY_ID, SET_VIDEO_LIST,
  SORT_MOVIES_ASYNC, TOGGLE_FAVORITE_LIST } from "../redux/actions";

export type ItemType = {
  kinopoiskId?: number,
  nameRu?: string | null,
  nameOriginal?: string | null,
  countries?: Array<any>,
  genres?: Array<any>,
  year?: number,
  type?: string,
  posterUrl?: string,
  posterUrlPreview?: string,
}

export type VideoItemType = {
  url: string,
  site: string,
}

export type MoviesType = {
  items: Array<ItemType>,
  total: number,
  totalPages: number,
}

export type InitialStateType = {
  movies: MoviesType,
  currentPage: number,
  totalCount: number, //всего фильмов
  total: number,
  isFetching: boolean,
  isFetchedError: boolean,
  movieIdToDelete: number | null,
  isDeleteFormOpen: boolean,
  filter: string,
  sortType: string,
  keyword: string,
  favoriteMovies: Array<ItemType>,
  selectedByIdMovie: {},
  isFavorListOpen: boolean,
  videos: Array<VideoItemType>,
}

export type SetMovieType = {
  type: typeof SET_MOVIES_ASYNC,
  movies: MoviesType,
  totalCount: number,
  total: number,
}

export type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number,
}

export type SetMovieByIDType = {
  type: typeof SET_MOVIE_BY_ID,
  movie: ItemType,
}

export type CloseMovieDetailsFormType = {
  type: typeof CLOSE_MOVIE_DETAILS_FORM,
}

export type SetIsFetchingType = {
  type: typeof SET_IS_FETCHING,
  isFetching: boolean,
}

export type SetFetchedErrorType = {
  type: typeof SET_FETCHED_ERROR,
  isFetchedError: boolean,
}

export type FilterGenreMoviesAsyncType = {
  type: typeof FILTER_MOVIES_ASYNC,
  filter: string,
}

export type SortMoviesAsyncType = {
  type: typeof SORT_MOVIES_ASYNC,
  sortType: string,
}

export type SetMoviesKeywordType = {
  type: typeof SEARCH_MOVIES_KEYWORD,
  keyword: string,
}

export type DeleteMovieByIdType = {
  type: typeof DELETE_MOVIE,
  id: number,
}

export type OpenDeleteMovieFormType = {
  type: typeof OPEN_DELETE_MOVIE_FORM,
  id: number,
}

export type CloseDeleteMovieFormType = {
  type: typeof CLOSE_DELETE_MOVIE_FORM,
}

export type SetFavoriteMovieType = {
  type: typeof SET_FAVORITE_MOVIE,
  id: number,
}

export type RemoveFavoriteMovieType = {
  type: typeof REMOVE_FAVORITE_MOVIE,
  id: number,
}

export type ToggleFavoriteListType = {
  type: typeof TOGGLE_FAVORITE_LIST,
  isFavorListOpen: boolean,
}

export type SetVideoListType = {
  type: typeof SET_VIDEO_LIST,
  videos: Array<VideoItemType>,
}

export type ActionsTypes = SetMovieType | SetCurrentPageType | SetMovieByIDType |
  CloseMovieDetailsFormType | SetIsFetchingType | SetFetchedErrorType | FilterGenreMoviesAsyncType |
  SortMoviesAsyncType | SetMoviesKeywordType | DeleteMovieByIdType | OpenDeleteMovieFormType |
  CloseDeleteMovieFormType | SetFavoriteMovieType | RemoveFavoriteMovieType | ToggleFavoriteListType |
  SetVideoListType;

