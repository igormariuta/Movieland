import Url from 'url';

export default class ApiService {

  auth = {
    api_key: 'addceba62b69f45e9d89c7b9194948e7',
    language: 'en-US'
  }

  getData = async (pathname: string, query?: {}) => {

    const endpoint = {
      protocol: 'https',
      host: 'api.themoviedb.org/3',
      pathname: pathname,
      query: { ...this.auth, ...query}
    };
   
    const uri = Url.format(endpoint);
    return fetch(uri).then((res) => res.json());
  }

  // 

  discover() {
    return this.getData('/discover/movie');
  }
  
  getPopular(query: {}) {
    return this.getData('/movie/popular', query);
  }

  getTopRated(query: {}) {
    return this.getData('/movie/top_rated', query);
  }

  getNowPlaying(query: {}) {
    return this.getData('/movie/now_playing', query);
  }

  getLatest() {
    return this.getData('/movie/latest');
  }

  getMovie(id: string) {
    return this.getData(`/movie/${id}`);
  }

}