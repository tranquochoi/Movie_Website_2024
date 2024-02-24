import internal from "stream";
import { CreditSection } from "./Credits";
import { ReviewSection } from "./Reviews";
import { VideoList } from "./Video";

export interface MovieList {
  results: Movie[];
}

export interface Genre {
  id: Int16Array;
  name: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}
export interface ImageFilm {
  file_path: string;
  width: Int16Array;
}
export interface ListImage {
  backdrops: ImageFilm[];
}

export interface Movie {
  id: Number;
  rating: Number;
}
