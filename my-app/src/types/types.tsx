export enum ActionTypes {
  SET_MOVIES_ASYNC = 'MOVIES/SET_MOVIES_ASYNC',
  SET_CURRENT_PAGE = 'MOVIES/SET_CURRENT_PAGE',
  SET_MOVIE_BY_ID = 'MOVIES/SET_MOVIE_BY_ID',
  OPEN_MOVIE_DETAILS_FORM = 'MOVIES/OPEN_MOVIE_DETAILS_FORM',
  CLOSE_MOVIE_DETAILS_FORM = 'MOVIES/CLOSE_MOVIE_DETAILS_FORM',
  SET_IS_FETCHING = 'MOVIES/SET_IS_FETCHING',
  SET_FETCHED_ERROR = 'ERROR/SET_FETCHED_ERROR',
  FILTER_MOVIES_ASYNC = 'MOVIES/FILTER_MOVIES_ASYNC',
  SORT_MOVIES_ASYNC = 'MOVIES/SORT_MOVIES_ASYNC',
  SEARCH_MOVIES_KEYWORD = 'MOVIES/SEARCH_MOVIES_KEYWORD',
  DELETE_MOVIE = 'MOVIES/DELETE_MOVIE',
  OPEN_DELETE_MOVIE_FORM = 'MOVIES/OPEN_DELETE_MOVIE_FORM',
  CLOSE_DELETE_MOVIE_FORM = 'MOVIES/CLOSE_DELETE_MOVIE_FORM',
  SET_FAVORITE_MOVIE = 'MOVIES/SET_FAVORITE_MOVIE',
  REMOVE_FAVORITE_MOVIE = 'MOVIES/REMOVE_FAVORITE_MOVIE',
  TOGGLE_FAVORITE_LIST = 'MOVIES/TOGGLE_FAVORITE_LIST',
  SET_VIDEO_LIST = 'MOVIES/SET_VIDEO_LIST',
  REMOVE_VIDEO_LIST = 'MOVIES/REMOVE_VIDEO_LIST',
  SET_AUTH_NAME = 'AUTH/SET_AUTH_NAME',
  REMOVE_AUTH_NAME = 'AUTH/REMOVE_AUTH_NAME',
  SET_AUTH_PASSWORD = 'AUTH/SET_AUTH_PASSWORD',
  REMOVE_AUTH_PASSWORD = 'AUTH/REMOVE_AUTH_PASSWORD',
}

export type CountryType = {
  country: string
}

export type GenreType = {
  genre: string
}

export type ItemType = {
  kinopoiskId: number | null,
  nameRu?: string | null,
  nameOriginal?: string | null,
  countries?: Array<CountryType>,
  genres?: Array<GenreType>,
  year?: number,
  type?: string,
  posterUrl?: string,
  posterUrlPreview?: string,
  slogan?: string,
  shortDescription?: string,
  description?: string,
  ratingKinopoisk?: number,
  serial?: string,
  filmLength?: number
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
  areDetailsOpen: boolean,
  selectedByIdMovie: ItemType | null,
  isFavorListOpen: boolean,
  videos: Array<VideoItemType>,
  userName: string,
  password: string
}

export type SetMovieType = {
  type: ActionTypes.SET_MOVIES_ASYNC,
  movies: MoviesType,
  totalCount: number,
  total: number,
}

export type SetCurrentPageType = {
  type: ActionTypes.SET_CURRENT_PAGE,
  currentPage: number,
}

export type SetMovieByIDType = {
  type: ActionTypes.SET_MOVIE_BY_ID,
  movie: ItemType,
}

export type OpenMovieDetailsFormType = {
  type: ActionTypes.OPEN_MOVIE_DETAILS_FORM,
  areDetailsOpen: boolean,
}

export type CloseMovieDetailsFormType = {
  type: ActionTypes.CLOSE_MOVIE_DETAILS_FORM,
}

export type SetIsFetchingType = {
  type: ActionTypes.SET_IS_FETCHING,
  isFetching: boolean,
}

export type SetFetchedErrorType = {
  type: ActionTypes.SET_FETCHED_ERROR,
  isFetchedError: boolean,
}

export type FilterGenreMoviesAsyncType = {
  type: ActionTypes.FILTER_MOVIES_ASYNC,
  filter: string,
}

export type SortMoviesAsyncType = {
  type: ActionTypes.SORT_MOVIES_ASYNC,
  sortType: string,
}

export type SetMoviesKeywordType = {
  type: ActionTypes.SEARCH_MOVIES_KEYWORD,
  keyword: string,
}

export type DeleteMovieByIdType = {
  type: ActionTypes.DELETE_MOVIE,
  id: number,
}

export type OpenDeleteMovieFormType = {
  type: ActionTypes.OPEN_DELETE_MOVIE_FORM,
  id: number,
}

export type CloseDeleteMovieFormType = {
  type: ActionTypes.CLOSE_DELETE_MOVIE_FORM,
}

export type SetFavoriteMovieType = {
  type: ActionTypes.SET_FAVORITE_MOVIE,
  id: number,
}

export type RemoveFavoriteMovieType = {
  type: ActionTypes.REMOVE_FAVORITE_MOVIE,
  id: number,
}

export type ToggleFavoriteListType = {
  type: ActionTypes.TOGGLE_FAVORITE_LIST,
  isFavorListOpen: boolean,
}

export type SetVideoListType = {
  type: ActionTypes.SET_VIDEO_LIST,
  videos: Array<VideoItemType>,
}

export type RemoveVideoListType = {
  type: ActionTypes.REMOVE_VIDEO_LIST,
  videos: Array<VideoItemType>,
}

export type SetAuthNameType = {
  type: ActionTypes.SET_AUTH_NAME,
  userName: string,
}

export type RemoveAuthNameType = {
  type: ActionTypes.REMOVE_AUTH_NAME,
  userName: string,
}

export type SetAuthPasswordType = {
  type: ActionTypes.SET_AUTH_PASSWORD,
  password: string,
}

export type RemoveAuthPasswordType = {
  type: ActionTypes.REMOVE_AUTH_PASSWORD,
  password: string,
}

export type ActionType = SetMovieType | SetCurrentPageType | SetMovieByIDType | OpenMovieDetailsFormType |
  CloseMovieDetailsFormType | SetIsFetchingType | SetFetchedErrorType | FilterGenreMoviesAsyncType |
  SortMoviesAsyncType | SetMoviesKeywordType | DeleteMovieByIdType | OpenDeleteMovieFormType |
  CloseDeleteMovieFormType | SetFavoriteMovieType | RemoveFavoriteMovieType | ToggleFavoriteListType |
  SetVideoListType | RemoveVideoListType | SetAuthNameType | RemoveAuthNameType | SetAuthPasswordType | RemoveAuthPasswordType;

