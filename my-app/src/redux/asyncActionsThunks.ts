import { Dispatch } from 'react';
import { ActionType } from '../types/types';
import { setFetchedError, setIsFetching, setMovieByID, setMoviesAsync, setVideoList } from './actions';
import { fetchMovieByIdAPI, fetchMoviesAPI, fetchVideoByIdAPI } from '../axiosAPI/api';

export const getMoviesAPI = (currentPage: number, sortType = 'RATING', genre: string = 'all', query = '') => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch(setIsFetching(true));
      const res = await fetchMoviesAPI(currentPage, sortType, genre, query);
      dispatch(setMoviesAsync(res.data));
      dispatch(setIsFetching(false));
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}

export const fetchMovieById = (movieId: string, isMounted: boolean) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      const res = await fetchMovieByIdAPI(movieId);
      if (isMounted) {
        dispatch(setMovieByID(res.data));
      }
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}

export const fetchVideoById = (id: string, isMounted: boolean) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      const res = await fetchVideoByIdAPI(id);
      if (isMounted) {
        dispatch(setVideoList(res.data.items || []));
      }
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}
