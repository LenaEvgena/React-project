import { Dispatch } from 'react';
import { ActionsTypes } from '../types/types';
import { setFetchedError, setIsFetching, setMovieByID, setMoviesAsync, setVideoList } from './actions';

const APIUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
const token = '4fa525f3-c08b-4f89-8459-00b56e10d8eb';
const yearSorting = 'yearFrom=1000&yearTo=2021';

export const getMoviesAPI = (currentPage: number, sortType = 'RATING', genre: string, query = '') => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      let genreType: string | number;
      switch (genre) {
        case 'all':
          genreType = '';
          break;
        case 'melodrama':
          genreType = 4;
          break;
        case 'drama':
          genreType = 2;
          break;
        case 'thriller':
          genreType = 1;
          break;
        case 'crime':
          genreType = 3;
          break;
        default:
          genreType = '';
          break;
      }
      const url = (sortType === 'RATING') ? `${APIUrl}?type=FILM&order=${sortType}` : `${APIUrl}?type=FILM&order=${sortType}&${yearSorting}`;

      dispatch(setIsFetching(true));
      const res = await fetch(`${url}&genres=${genreType}&keyword=${query}&page=${currentPage}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': token,
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch(setMoviesAsync(data));
      dispatch(setIsFetching(false));
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}

export const fetchMovieById = (movieId: string) => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      const res = await fetch(`${APIUrl}${movieId}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': token,
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json();
      dispatch(setMovieByID(data));
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}

export const fetchVideoById = (id: string) => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      const res = await fetch(`${APIUrl}${id}/videos`, {
        method: 'GET',
        headers: {
          'X-API-KEY': token,
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json();
      dispatch(setVideoList(data.items || []));
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}
