export interface CourseResponse {
  successful: boolean;
  result: Array<Course>;
}

export interface Course {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
  id: string;
}

export type CourseCreate = Omit<Course, 'id' | 'creationDate'>;
