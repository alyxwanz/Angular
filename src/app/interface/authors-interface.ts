export interface AuthorsResponse {
  successful: boolean;
  result: Array<Author>;
}

export interface Author {
  id: string;
  name: string;
}
