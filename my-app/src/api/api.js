const APIUrl = 'https://kinopoiskapiunofficial.tech';
const APIParams = '/api/v2.2/films/';
const token = '4fa525f3-c08b-4f89-8459-00b56e10d8eb';
const page = `page=${Math.floor(Math.random() * 150) + 1}`;

// export const fetchMovieAPI = async () => {
//   try {
//     await fetch(`${APIUrl}${APIParams}?${page}`, {
//       method: 'GET',
//       headers: {
//         'X-API-KEY': token,
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(res => res.json())
//       .then(data => setMovies([...data.items]))
//   } catch (error) {
//     console.log(error.message);
//   }
// }


// export const fetchMovieById = async () => {
//   try {
//     await fetch(`${APIUrl}${APIParams}${id}`, {
//       method: 'GET',
//       headers: {
//         'X-API-KEY': token,
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(res => res.json())
//       .then(data => setMovie({...data}))
//   } catch (error) {
//     console.log(error.message);
//   }
// }
