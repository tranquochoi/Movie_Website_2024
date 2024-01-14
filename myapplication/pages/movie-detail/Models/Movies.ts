import { CreditSection } from "./Credits";
import { VideoList } from "./Video";

export interface MovieList {
  results: Movies[];
}

export interface Genre {
  id: string;
  name: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Movies {
  id: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  budget: string;
  genres: Genre[];
  overview: string;
  popularity: number;
  release_date: string;
  runtime: number;
  video: boolean;
  production_countries: ProductionCountry[];
  videos: VideoList;
  credits: CreditSection;
}