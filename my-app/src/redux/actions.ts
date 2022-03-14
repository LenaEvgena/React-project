import {
  ActionTypes,
  CloseDeleteMovieFormType, CloseMovieDetailsFormType, DeleteMovieByIdType, FilterGenreMoviesAsyncType, ItemType,
  MoviesType, OpenDeleteMovieFormType, RemoveFavoriteMovieType, SetCurrentPageType, SetFavoriteMovieType,
  SetFetchedErrorType, SetIsFetchingType, SetMovieByIDType, SetMoviesKeywordType, SetMovieType, SetVideoListType,
  SortMoviesAsyncType, ToggleFavoriteListType, VideoItemType
} from "./../types/types";

export const setMoviesAsync = (movies: MoviesType): SetMovieType => ({
  type: ActionTypes.SET_MOVIES_ASYNC,
  movies,
  totalCount: movies.total,
  total: movies.totalPages,
})

export const setCurrentPage = (page: number): SetCurrentPageType => ({
  type: ActionTypes.SET_CURRENT_PAGE,
  currentPage: page,
})

export const setMovieByID = (movie: ItemType): SetMovieByIDType => ({
  type: ActionTypes.SET_MOVIE_BY_ID,
  movie,
});

export const closeMovieDetailsForm = (): CloseMovieDetailsFormType => ({
  type: ActionTypes.CLOSE_MOVIE_DETAILS_FORM,
});

export const setIsFetching = (bool: boolean): SetIsFetchingType => ({
  type: ActionTypes.SET_IS_FETCHING,
  isFetching: bool,
})

export const setFetchedError = (bool: boolean): SetFetchedErrorType => ({
  type: ActionTypes.SET_FETCHED_ERROR,
  isFetchedError: bool,
})

export const filterGenreMoviesAsync = (genre: string): FilterGenreMoviesAsyncType => ({
  type: ActionTypes.FILTER_MOVIES_ASYNC,
  filter: genre,
})

export const sortMoviesAsync = (sortType: string): SortMoviesAsyncType => ({
  type: ActionTypes.SORT_MOVIES_ASYNC,
  sortType,
})

export const setMoviesKeyword = (keyword: string): SetMoviesKeywordType => ({
  type: ActionTypes.SEARCH_MOVIES_KEYWORD,
  keyword,
})

export const deleteMovieById = (id: number): DeleteMovieByIdType => ({
  type: ActionTypes.DELETE_MOVIE,
  id,
})

export const openDeleteMovieForm = (id: number): OpenDeleteMovieFormType => ({
  type: ActionTypes.OPEN_DELETE_MOVIE_FORM,
  id,
});

export const closeDeleteMovieForm = (): CloseDeleteMovieFormType => ({
  type: ActionTypes.CLOSE_DELETE_MOVIE_FORM,
});

export const setFavoriteMovie = (id: number): SetFavoriteMovieType => ({
  type: ActionTypes.SET_FAVORITE_MOVIE,
  id,
});

export const removeFavoriteMovie = (id: number): RemoveFavoriteMovieType => ({
  type: ActionTypes.REMOVE_FAVORITE_MOVIE,
  id,
});

export const toggleFavoriteList = (bool: boolean): ToggleFavoriteListType => ({
  type: ActionTypes.TOGGLE_FAVORITE_LIST,
  isFavorListOpen: bool,
});

export const setVideoList = (videos: Array<VideoItemType>): SetVideoListType => ({
  type: ActionTypes.SET_VIDEO_LIST,
  videos,
});
