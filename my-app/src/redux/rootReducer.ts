// import { combineReducers } from 'redux';
// export const rootReducer = combineReducers({}); //если комбинируются отдельные редьюсеры
import { SET_MOVIES_ASYNC, SORT_MOVIES_ASYNC, SET_CURRENT_PAGE, SET_IS_FETCHING, SET_FETCHED_ERROR, FILTER_MOVIES_ASYNC, SEARCH_MOVIES_KEYWORD } from './actions';

const initialState = {
  movies: [],
  currentPage: 1,
  totalCount: 0,
  total: 0,
  isFetching: false,
  isFetchedError: false,
  filter: 'all',
  sortType: 'RATING',
  keyword: '',
}

export const rootReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIES_ASYNC:
      return {
        ...state,
        movies: action.movies, //приходит из action
        totalCount: action.totalCount, //приходит из action
        total: action.total, //приходит из action
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
    default:
      return state;
  }
}


// case 'DELETE_MOVIE_ASYNC_SUCCESS':
//     return {
//       ...state,
//       idMovieIdToDelete: '',
//       openMovieDeleteForm: false,
//       total: state.total - 1,
//       apiError: false,
//       movies: state.movies.filter((el) => el.id !== action.id),
//     };
// export const openDeleteMovieForm = (id) => ({
//   type: 'OPEN_DELETE_MOVIE_FORM',
//   id,
// });

// export const closeDeleteMovieForm = () => ({
//   type: 'CLOSE_DELETE_MOVIE_FORM',
// });

// export const deleteMovieAsync = (id) => ({
//   type: 'DELETE_MOVIE_ASYNC',
//   id,
// });

// export const deleteMovieAsyncSuccess = (id) => ({
//   type: 'DELETE_MOVIE_ASYNC_SUCCESS',
//   id,
// });
