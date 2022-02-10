export interface UserResponce {
  successful: boolean;
  result: UserModel;
}
export interface UserModel {
  name: string;
  email: string;
  password: string;
  role: string;
}
