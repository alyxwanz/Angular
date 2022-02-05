export interface LoginRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  successful: boolean;
  result: string;
  user: {
    email: string;
    name: string;
  };
}

export interface RegisterRequest extends LoginRequest {}

export interface RegisterResponce {
    successful: boolean;
    result: string;
}