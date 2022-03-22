import { Dispatch } from 'react';
import { ActionType, GenresType } from '../types/types';
import { setFetchedError, setIsFetching, setMovieByID, setMoviesAsync, setVideoList } from './actions';
import { fetchMoviesAPI } from '../axiosAPI/api';
import axios from 'axios';


const APIUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
const token = '4fa525f3-c08b-4f89-8459-00b56e10d8eb';
const yearSorting = 'yearFrom=1000&yearTo=2021';

export const getMoviesAPI = (currentPage: number, sortType = 'RATING', genre: string = 'all', query = '') => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      const genres: GenresType = {
        'all': '',
        'melodrama': 4,
        'drama': 2,
        'thriller': 1,
        'crime': 3,
      };
      const url = (sortType === 'RATING') ? `${APIUrl}?type=FILM&order=${sortType}` : `${APIUrl}?type=FILM&order=${sortType}&${yearSorting}`;

      dispatch(setIsFetching(true));
      axios
        .get(`${url}&genres=${genres[genre]}&keyword=${query}&page=${currentPage}`, {
          headers: {
            'X-API-KEY': token,
            'Content-Type': 'application/json',
          },
        })
        .then(res => dispatch(setMoviesAsync(res.data)))
        .then(() => dispatch(setIsFetching(false)))
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}

export const fetchMovieById = (movieId: string) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      axios
        .get(`${APIUrl}${movieId}`, {
          headers: {
            'X-API-KEY': token,
            'Content-Type': 'application/json',
          },
        })
        .then(res => dispatch(setMovieByID(res.data)))
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}

export const fetchVideoById = (id: string) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      axios
        .get(`${APIUrl}${id}/videos`, {
          headers: {
            'X-API-KEY': token,
            'Content-Type': 'application/json',
          },
        })
        .then(res => dispatch(setVideoList(res.data.items || [])))
    } catch (error) {
      dispatch(setFetchedError(true));
    }
  }
}

// export const getMoviesAPI = (currentPage: number, sortType = 'RATING', genre: string = 'all', query = '') => {
//   return async (dispatch: Dispatch<ActionType>) => {
//     try {
//       const genres: GenresType = {
//         'all': '',
//         'melodrama': 4,
//         'drama': 2,
//         'thriller': 1,
//         'crime': 3,
//       };
//       const url = (sortType === 'RATING') ? `${APIUrl}?type=FILM&order=${sortType}` : `${APIUrl}?type=FILM&order=${sortType}&${yearSorting}`;

//       dispatch(setIsFetching(true));
//       const res = await fetch(`${url}&genres=${genres[genre]}&keyword=${query}&page=${currentPage}`, {
//         method: 'GET',
//         headers: {
//           'X-API-KEY': token,
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await res.json();
//       dispatch(setMoviesAsync(data));
//       dispatch(setIsFetching(false));
//     } catch (error) {
//       dispatch(setFetchedError(true));
//     }
//   }
// }

// export const fetchMovieById = (movieId: string) => {
//   return async (dispatch: Dispatch<ActionType>) => {
//     try {
//       const res = await fetch(`${APIUrl}${movieId}`, {
//         method: 'GET',
//         headers: {
//           'X-API-KEY': token,
//           'Content-Type': 'application/json',
//         },
//       })
//       const data = await res.json();
//       dispatch(setMovieByID(data));
//     } catch (error) {
//       dispatch(setFetchedError(true));
//     }
//   }
// }

// export const fetchVideoById = (id: string) => {
//   return async (dispatch: Dispatch<ActionType>) => {
//     try {
//       const res = await fetch(`${APIUrl}${id}/videos`, {
//         method: 'GET',
//         headers: {
//           'X-API-KEY': token,
//           'Content-Type': 'application/json',
//         },
//       })
//       const data = await res.json();
//       dispatch(setVideoList(data.items || []));
//     } catch (error) {
//       dispatch(setFetchedError(true));
//     }
//   }
// }
