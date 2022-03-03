// import { combineReducers } from 'redux';
// export const rootReducer = combineReducers({}); //если комбинируются отдельные редьюсеры
import { SET_MOVIES_ASYNC } from './actions';

const initialState = {
  movies: [],
  totalCount: 0,
  filter: 'all',
}

export const rootReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIES_ASYNC:
      return {
        ...state,
        movies: action.movies, //приходит из action
        totalCount: action.totalCount, //приходит из action
      }
    default:
      return state;
  }
}
