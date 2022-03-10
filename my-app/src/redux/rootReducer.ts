// import { combineReducers } from 'redux';
// export const rootReducer = combineReducers({}); //если комбинируются отдельные редьюсеры
import {
  SET_MOVIES_ASYNC, SORT_MOVIES_ASYNC, SET_CURRENT_PAGE, SET_IS_FETCHING, SET_FETCHED_ERROR,
  FILTER_MOVIES_ASYNC, SEARCH_MOVIES_KEYWORD, DELETE_MOVIE, OPEN_DELETE_MOVIE_FORM, CLOSE_DELETE_MOVIE_FORM,
  SET_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE
} from './actions';

const initialState = {
  movies: [],
  currentPage: 1,
  totalCount: 0, //всего фильмов
  total: 0,
  isFetching: false,
  isFetchedError: false,
  movieIdToDelete: '',
  isDeleteFormOpen: false,
  filter: 'all',
  sortType: 'RATING',
  keyword: '',
  favoriteMovies: [],
}


export const rootReducer: any = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIES_ASYNC:
      return {
        ...state,
        movies: action.movies, //приходит из action
        totalCount: action.totalCount, //приходит из action
        total: action.total, //приходит из action
        isFetchedError: false,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage, //приходит из action
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching, //приходит из action
      }
    case SET_FETCHED_ERROR:
      return {
        ...state,
        isFetchedError: action.isFetchedError, //приходит из action
      }
    case FILTER_MOVIES_ASYNC:
      return {
        ...state,
        filter: action.filter, //приходит из action
      }
    case SORT_MOVIES_ASYNC:
      return {
        ...state,
        sortType: action.sortType, //приходит из action
      }
    case SEARCH_MOVIES_KEYWORD:
      return {
        ...state,
        keyword: action.keyword, //приходит из action
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
        movieIdToDelete: '',
        isDeleteFormOpen: false,
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movieIdToDelete: '',
        isDeleteFormOpen: false,
        totalCount: state.totalCount - 1,
        total: state.total - 1,
        movies: state.movies.filter((movie: any) => movie.kinopoiskId !== action.id),
      }
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
    default:
      return state;
  }
}
