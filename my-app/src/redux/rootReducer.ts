import { ActionType, ActionTypes, InitialStateType } from '../types/types';

const initialState: InitialStateType = {
  movies: {
    items: [],
    total: 0,
    totalPages: 0
  },
  currentPage: 1,
  totalCount: 0,
  total: 0,
  isFetching: false,
  isFetchedError: false,
  movieIdToDelete: null,
  isDeleteFormOpen: false,
  filter: 'all',
  sortType: 'RATING',
  keyword: '',
  favoriteMovies: [],
  isDetailsFormOpen: false,
  selectedByIdMovie: {
    kinopoiskId: null,
  },
  isFavorListOpen: false,
  videos: [],
  userName: '',
  password: '',
}

export const rootReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case ActionTypes.SET_MOVIES_ASYNC:
      return {
        ...state,
        movies: action.movies,
        totalCount: action.totalCount,
        total: action.total,
        isFetchedError: false,
      }
    case ActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case ActionTypes.SET_MOVIE_BY_ID:
      return {
        ...state,
        selectedByIdMovie: action.movie,
      }
    case ActionTypes.TOGGLE_MOVIE_DETAILS_FORM:
      return {
        ...state,
        isDetailsFormOpen: action.isDetailsFormOpen,
      }
    case ActionTypes.REMOVE_SELECTED_MOVIE:
      return {
        ...state,
        selectedByIdMovie: null,
      }
    case ActionTypes.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case ActionTypes.SET_FETCHED_ERROR:
      return {
        ...state,
        isFetchedError: action.isFetchedError,
      }
    case ActionTypes.FILTER_MOVIES_ASYNC:
      return {
        ...state,
        filter: action.filter,
      }
    case ActionTypes.SORT_MOVIES_ASYNC:
      return {
        ...state,
        sortType: action.sortType,
      }
    case ActionTypes.SEARCH_MOVIES_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      }
    case ActionTypes.OPEN_DELETE_MOVIE_FORM:
      return {
        ...state,
        movieIdToDelete: action.id,
        isDeleteFormOpen: true,
      };
    case ActionTypes.CLOSE_DELETE_MOVIE_FORM:
      return {
        ...state,
        movieIdToDelete: null,
        isDeleteFormOpen: false,
      };
    case ActionTypes.DELETE_MOVIE:
      let copy = { ...state };
      copy.isDeleteFormOpen = false;
      copy.movieIdToDelete = null;
      copy.totalCount = state.totalCount - 1;
      copy.total = state.total - 1;
      copy.movies = { ...state.movies };
      copy.movies.items = [...state.movies.items.filter((item: any) => item.kinopoiskId !== action.id)];
      return copy;
    case ActionTypes.SET_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: [...state.movies.items.filter((item: any) => item.kinopoiskId === action.id), ...state.favoriteMovies],
      }
    case ActionTypes.REMOVE_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies.filter((item: any) => item.kinopoiskId !== action.id)],
      }
    case ActionTypes.TOGGLE_FAVORITE_LIST:
      return {
        ...state,
        isFavorListOpen: action.isFavorListOpen,
      }
    case ActionTypes.SET_VIDEO_LIST:
      return {
        ...state,
        videos: action.videos,
      }
    case ActionTypes.REMOVE_VIDEO_LIST:
      return {
        ...state,
        videos: action.videos,
      }
    case ActionTypes.SET_AUTH_NAME:
      return {
        ...state,
        userName: action.userName,
      }
    case ActionTypes.REMOVE_AUTH_NAME:
      return {
        ...state,
        userName: action.userName,
      }
    case ActionTypes.SET_AUTH_PASSWORD:
      return {
        ...state,
        password: action.password,
      }
    case ActionTypes.REMOVE_AUTH_PASSWORD:
      return {
        ...state,
        password: action.password,
      }
    default:
      return state;
  }
}
