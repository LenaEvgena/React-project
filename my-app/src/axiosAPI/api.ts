import { GenresType } from '../types/types';
import axios from 'axios';

const APIUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
const token = '4fa525f3-c08b-4f89-8459-00b56e10d8eb';
const yearSorting = 'yearFrom=1000&yearTo=2021';

export const fetchMoviesAPI = (currentPage: number, sortType = 'RATING', genre: string = 'all', query = '') => {
  const genres: GenresType = {
    'all': '',
    'melodrama': 4,
    'drama': 2,
    'thriller': 1,
    'crime': 3,
  };
  const url = (sortType === 'RATING') ? `${APIUrl}?type=FILM&order=${sortType}` : `${APIUrl}?type=FILM&order=${sortType}&${yearSorting}`;

  return axios
          .get(`${url}&genres=${genres[genre]}&keyword=${query}&page=${currentPage}`, {
            headers: {
              'X-API-KEY': token,
              'Content-Type': 'application/json',
            },
          })
}

export const fetchMovieByIdAPI = (movieId: string) => {
  return axios
          .get(`${APIUrl}${movieId}`, {
            headers: {
              'X-API-KEY': token,
              'Content-Type': 'application/json',
            },
          })
}

export const fetchVideoByIdAPI = (id: string) => {
  return axios
          .get(`${APIUrl}${id}/videos`, {
            headers: {
              'X-API-KEY': token,
              'Content-Type': 'application/json',
            },
          })
}
