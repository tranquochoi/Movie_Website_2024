import { Movie } from "./Movies";

export interface People {
  also_known_as: string;
  birthday: string;
  name: string;
  gender: number;
  images: PeopleImage;
  known_for_department: string;
  place_of_birth: string;
  popularity: number;
  biography: string;
  external_ids: Info;
  movie_credits: MovieCredits;
}
export interface MovieCredits {
  cast: Movie[];
}
export interface Info {
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}
export interface PeopleImage {
  id: Int16Array;
  profiles: Profile[];
}
export interface Profile {
  aspect_ratio: Float32Array;
  file_path: string;
}
