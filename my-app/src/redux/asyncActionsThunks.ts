import { Dispatch } from 'react';
import { ActionType } from '../types/types';
import { setFetchedError, setIsFetching, setMovieByID, setMoviesAsync, setVideoList } from './actions';
import { fetchMovieByIdAPI, fetchMoviesAPI, fetchVideoByIdAPI } from '../axiosAPI/api';

export const getMoviesAPI = (ref: boolean, currentPage: number, sortType = 'RATING', genre: string = 'all', query = '') => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch(setIsFetching(true));
      const res = await fetchMoviesAPI(currentPage, sortType, genre, query);
      if (ref) {
        dispatch(setMoviesAsync(res.data));
      }
      dispatch(setIsFetching(false));
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}

export const fetchMovieById = (movieId: string) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      const res = await fetchMovieByIdAPI(movieId);
      dispatch(setMovieByID(res.data));
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}

export const fetchVideoById = (id: string) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      const res = await fetchVideoByIdAPI(id);
      dispatch(setVideoList(res.data.items || []));
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}
