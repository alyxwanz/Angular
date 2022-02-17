export interface AuthorsResponse {
  successful: boolean;
  result: Array<Author>;
}

export interface Author {
  name: string;
  id: string;
}