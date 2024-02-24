export interface Review {
  author: string;
  author_details: Author_detail;
  content: string;
  created_at: string;
}
export interface Author_detail {
  name: string;
  username: string;
  avatar_path: string;
  rating: GLfloat;
}
export interface ReviewSection {
  results: Review[];
}
