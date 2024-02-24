export interface RequestTokenResponse {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface SessionResponse {
  success: boolean;
  session_id: string;
}

export interface User {
  username: string;
  id: number;
  avatar: UserAvatar;
}

export type UserAvatar = {
  tmdb: {
    avatar_path?: string;
  };
};

export type CreateSessionInput = {
  url: string;
  token: string;
};
