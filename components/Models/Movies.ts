import internal from "stream";
import { CreditSection } from "./Credits";
import { ReviewSection } from "./Reviews";
import { VideoList } from "./Video";

export interface MovieList {
  results: Movie[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}
export interface ImageFilm {
  file_path: string;
  width: number;
}
export interface ListImage {
  backdrops: ImageFilm[];
}

export interface Movie {
  id: Number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  budget: string;
  genres: Genre[];
  genre_ids: number[];
  overview: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  video: boolean;
  production_countries: ProductionCountry[];
  videos: VideoList;
  credits: CreditSection;
  reviews: ReviewSection;
  vote_count: number;
  popularity: number;
}
