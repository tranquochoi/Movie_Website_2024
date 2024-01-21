export interface People {
  also_known_as: string;
  birthday: string;
  name: string;
  images: PeopleImage;
}
export interface PeopleImage {
  id: Int16Array;
  profiles: Profile[];
}
export interface Profile {
  aspect_ratio: Float32Array;
  file_path: string;
}
