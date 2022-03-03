// import { combineReducers } from 'redux';
// export const rootReducer = combineReducers({}); //если комбинируются отдельные редьюсеры
import { SET_MOVIES_ASYNC } from './actions';
import { SEARCH_MOVIES_ASYNC } from './actions';
import { SET_CURRENT_PAGE } from './actions';

const initialState = {
  movies: [],
  currentPage: 1,
  totalCount: 0,
  total: 0,
  filter: 'all',
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
    default:
      return state;
  }
}
