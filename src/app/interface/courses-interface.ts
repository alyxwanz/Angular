export interface CoursesResponse {
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

export interface CourseResponse {
  successful: boolean;
  result: Course;
}

export interface CourseCard {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];
  id: string;
}

export type CourseCreate = Omit<Course, 'id' | 'creationDate'>;
