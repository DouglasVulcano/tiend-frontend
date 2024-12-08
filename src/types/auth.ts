export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: string;
}

export interface LoginResponse {
  status: number;
  message: string;
  data: string; // JWT token
  timestamp: string;
}

export interface UserResponse {
  status: number;
  message: string;
  data: User;
  timestamp: string;
}