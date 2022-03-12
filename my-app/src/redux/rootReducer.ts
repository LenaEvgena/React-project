import {
  SET_MOVIES_ASYNC, SORT_MOVIES_ASYNC, SET_CURRENT_PAGE, SET_IS_FETCHING, SET_FETCHED_ERROR,
  FILTER_MOVIES_ASYNC, SEARCH_MOVIES_KEYWORD, DELETE_MOVIE, OPEN_DELETE_MOVIE_FORM, CLOSE_DELETE_MOVIE_FORM,
  SET_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE, SET_MOVIE_BY_ID, CLOSE_MOVIE_DETAILS_FORM, TOGGLE_FAVORITE_LIST, SET_VIDEO_LIST, ActionsTypes
} from './actions';

export type MoviesType = {
  items: Array<any>
  total: number
  totalPages: number
}

const initialState = {
  movies: {} as MoviesType,
  currentPage: 1,
  totalCount: 0, //всего фильмов
  total: 0,
  isFetching: false,
  isFetchedError: false,
  movieIdToDelete: null as number | null,
  isDeleteFormOpen: false,
  filter: 'all',
  sortType: 'RATING',
  keyword: '',
  favoriteMovies: [] as Array<any>,
  selectedByIdMovie: {},
  isFavorListOpen: false,
  videos: [] as Array<any>,
}

type InitialStateType = typeof initialState;

export const rootReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SET_MOVIES_ASYNC:
      return {
        ...state,
        movies: action.movies,
        totalCount: action.totalCount,
        total: action.total,
        isFetchedError: false,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case SET_MOVIE_BY_ID:
      return {
        ...state,
        selectedByIdMovie: action.movie,
      }
    case CLOSE_MOVIE_DETAILS_FORM:
      return {
        ...state,
        selectedByIdMovie: '',
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case SET_FETCHED_ERROR:
      return {
        ...state,
        isFetchedError: action.isFetchedError,
      }
    case FILTER_MOVIES_ASYNC:
      return {
        ...state,
        filter: action.filter,
      }
    case SORT_MOVIES_ASYNC:
      return {
        ...state,
        sortType: action.sortType,
      }
    case SEARCH_MOVIES_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      }
    case OPEN_DELETE_MOVIE_FORM:
      return {
        ...state,
        movieIdToDelete: action.id,
        isDeleteFormOpen: true,
      };
    case CLOSE_DELETE_MOVIE_FORM:
      return {
        ...state,
        movieIdToDelete: null,
        isDeleteFormOpen: false,
      };
    case DELETE_MOVIE:
      let copy = { ...state };
      copy.isDeleteFormOpen = false;
      copy.movieIdToDelete = null;
      copy.totalCount = state.totalCount - 1;
      copy.total = state.total - 1;
      copy.movies = { ...state.movies };
      copy.movies.items = [...state.movies.items.filter((item: any) => item.kinopoiskId !== action.id)];
      return copy;
    case SET_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: [...state.movies.items.filter((item: any) => item.kinopoiskId === action.id), ...state.favoriteMovies],
      }
    case REMOVE_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies.filter((item: any) => item.kinopoiskId !== action.id)],
      }
    case TOGGLE_FAVORITE_LIST:
      return {
        ...state,
        isFavorListOpen: action.isFavorListOpen,
      }
    case SET_VIDEO_LIST:
      return {
        ...state,
        videos: action.videos,
      }
    default:
      return state;
  }
}
