export const config = {
  server: {
    protocol: 'https',
    host: 'api.themoviedb.org/3'
  },
  // endpoint: {
  //   getTopRated: {
  //     method: 'GET',
  //     uri: {
  //       pathname: '/movie/top_rated'
  //     }
  //   }
  // },
  key: {
    api_key: 'addceba62b69f45e9d89c7b9194948e7',
    language: 'en-US'
  }
}

export default config;

interface IMoviesFilter {
  [n: string]: string
}

export const FILTERS: IMoviesFilter = {
  'Popular': 'popular',
  'Now Playing': 'now_playing',
  'Upcoming': 'upcoming',
  'Top Rated': 'top_rated',
}