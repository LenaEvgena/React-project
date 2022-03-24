export enum ActionTypes {
  SET_MOVIES_ASYNC = 'MOVIES/SET_MOVIES_ASYNC',
  SET_CURRENT_PAGE = 'MOVIES/SET_CURRENT_PAGE',
  SET_MOVIE_BY_ID = 'MOVIES/SET_MOVIE_BY_ID',
  TOGGLE_MOVIE_DETAILS_FORM = 'MOVIES/TOGGLE_MOVIE_DETAILS_FORM',
  REMOVE_SELECTED_MOVIE = 'MOVIES/REMOVE_SELECTED_MOVIE',
  SET_IS_FETCHING = 'MOVIES/SET_IS_FETCHING',
  SET_FETCHED_ERROR = 'ERROR/SET_FETCHED_ERROR',
  FILTER_MOVIES_ASYNC = 'MOVIES/FILTER_MOVIES_ASYNC',
  SORT_MOVIES_ASYNC = 'MOVIES/SORT_MOVIES_ASYNC',
  SEARCH_MOVIES_KEYWORD = 'MOVIES/SEARCH_MOVIES_KEYWORD',
  DELETE_MOVIE = 'MOVIES/DELETE_MOVIE',
  OPEN_DELETE_MOVIE_FORM = 'MOVIES/OPEN_DELETE_MOVIE_FORM',
  CLOSE_DELETE_MOVIE_FORM = 'MOVIES/CLOSE_DELETE_MOVIE_FORM',
  SET_FAVORITE_MOVIE_LIST = 'MOVIES/SET_FAVORITE_MOVIE_LIST',
  TOGGLE_FAVORITE_LIST = 'MOVIES/TOGGLE_FAVORITE_LIST',
  SET_VIDEO_LIST = 'MOVIES/SET_VIDEO_LIST',
  REMOVE_VIDEO_LIST = 'MOVIES/REMOVE_VIDEO_LIST',
}

export type UserImplType = {
  uid: string,
  email: string,
}

export type GenresType = {
  [key: string]: string | number,
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

export type FavoriteMoviesType = {
  films: ItemType
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
  isDetailsFormOpen: boolean,
  selectedByIdMovie: ItemType | null,
  isFavorListOpen: boolean,
  videos: Array<VideoItemType>,
  favoriteList: Array<FavoriteMoviesType>,
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

export type ToggleMovieDetailsFormType = {
  type: ActionTypes.TOGGLE_MOVIE_DETAILS_FORM,
  isDetailsFormOpen: boolean,
}

export type RemoveSelectedMovieType = {
  type: ActionTypes.REMOVE_SELECTED_MOVIE,
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

export type SetFavoriteMovieListType = {
  type: ActionTypes.SET_FAVORITE_MOVIE_LIST,
  favoriteList: Array<FavoriteMoviesType>,
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

export type ActionType = SetMovieType | SetCurrentPageType | SetMovieByIDType | ToggleMovieDetailsFormType |
  RemoveSelectedMovieType | SetIsFetchingType | SetFetchedErrorType | FilterGenreMoviesAsyncType |
  SortMoviesAsyncType | SetMoviesKeywordType | DeleteMovieByIdType | OpenDeleteMovieFormType |
  CloseDeleteMovieFormType | SetFavoriteMovieListType | ToggleFavoriteListType |
  SetVideoListType | RemoveVideoListType;
