export interface Movie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  media_type: string;
  original_title: string;
  images: Images;
  title: string;
  genres: Genre[];
}

interface Images {
  logos: Logo[];
}

interface Logo {
  file_path: string;
}

interface Genre {
  id: number;
  name: string;
}
