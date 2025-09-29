export interface User {
  username: string;
  email: string;
  password: string;
}

export interface UserResponse {
  id: string;
  token: string;
}
