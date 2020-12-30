import { Tperson, Treview } from './types'

// QUERY

export interface IQuery {
  endpoint: string,
  query?: {
    page?: number,
    query?: string
  },
}

// 

// export interface IDiscover {
//   total_results: number;
//   page: number;
//   total_pages: number;
//   results: TDiscover[];
// }



export interface IReviews {
  total_results: number;
  page: number;
  total_pages: number;
  results: Treview[];
}




export interface IMovies {
  total_results: number;
  page: number;
  total_pages: number;
  results: IMovie[];
}

export interface IMovie {
  adult?: boolean,
  backdrop_path?: string,
  belongs_to_collection?: boolean,
  budget?: number,
  genres?: [
    {
      id: number,
      name: string
    }
  ],
  homepage?: string
  id: number,
  imdb_id?: string,
  original_language: string,
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies?: [
    {
      id: number,
      logo_path: string
      name: string
      origin_country: string
    },
  ],
  production_countries?: [
    {
      iso_3166_1: string
      name: string
    }
  ],
  release_date: string
  revenue?: string
  runtime?: number
  spoken_languages?: [
    {
      english_name: string
      iso_639_1: string
      name: string
    }
  ],
  status?: string
  tagline?: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IPeople {
  total_results: number;
  page: number;
  total_pages: number;
  results: Tperson[];
}

export interface IPerson {
  adult: boolean,
  also_known_as: string[],
  biography: string,
  birthday: string,
  deathday: string,
  gender: number,
  homepage: string,
  id: number,
  imdb_id: string,
  known_for_department: string,
  name: string,
  place_of_birth: string,
  popularity: number,
  profile_path: string
}

export interface IPersonMovies {
  cast: [
    {
      vote_average: number,
      overview: string,
      release_date: string,
      adult: boolean,
      backdrop_path: string,
      vote_count: number,
      genre_ids: number[],
      id: number,
      original_language: string,
      original_title: string,
      poster_path: string,
      title: string,
      video: boolean,
      popularity: number,
      character: string,
      credit_id: string,
      order: number
    }
  ],
  crew: [
    {
      adult: boolean,
      backdrop_path: string,
      genre_ids: number[],
      id: number,
      original_language: string,
      original_title: string,
      overview: string,
      poster_path: string,
      release_date: string,
      title: string,
      video: boolean,
      vote_average: number,
      vote_count: number,
      popularity: number,
      credit_id: string,
      department: string,
      job: string
    }
  ], 
  id: number
}


// 
export interface ITv {
  backdrop_path: boolean,
  created_by: [],
  episode_run_time: [
    number
  ],
  first_air_date: string,
  genres: [
    {
      id: number,
      name: string
    }
  ],
  homepage: string,
  id: number,
  in_production: false,
  languages: [
    string
  ],
  last_air_date: string,
  last_episode_to_air: {
    air_date: string,
    episode_number: number,
    id: number,
    name: string,
    overview: string,
    production_code: string,
    season_number: number,
    still_path: null,
    vote_average: number,
    vote_count: number
  },
  name: string,
  next_episode_to_air: boolean,
  networks: [
    {
      name: string,
      id: number,
      logo_path: string,
      origin_country: string
    }
  ],
  number_of_episodes: number,
  number_of_seasons: number,
  origin_country: [
    string
  ],
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: [
    {
      id: number,
      logo_path: null,
      name: string,
      origin_country: string
    }
  ],
  production_countries: [],
  seasons: [
    {
      air_date: null,
      episode_count: number,
      id: number,
      name: string,
      overview: string,
      poster_path: null,
      season_number: number
    }
  ],
  spoken_languages: [
    {
      english_name: string,
      iso_639_1: string,
      name: string
    }
  ],
  status: string,
  tagline: string,
  type: string,
  vote_average: number,
  vote_count: number
}