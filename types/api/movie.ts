type TMovieKeys =
  | "id"
  | "title"
  | "description"
  | "videoUrl"
  | "thumbnailUrl"
  | "genre"
  | "duration";

export type TMovie = Record<TMovieKeys, string>;

export type TUser = {
  id: string;
  name: string;
  image?: string;
  email?: string;
  emailVerified?: string;
  hashedPassword?: string;
  createdAt?: string;
  updatedAt?: string;
  favoriteIds?: string;

  sessions: TSession[];
  accounts: TAccount[];
};

export type TAccount = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  expires_at?: number;

  user: TUser;
};

export type TSession = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: string;

  user: TUser;
};
