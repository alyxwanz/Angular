export interface CourseCard {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];
}

export const COURSE_LIST:CourseCard[] = [
    {
        title: 'Lorem',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero voluptas libero. Voluptas sed consequatur laborum doloribus numquam eaque fuga architecto, officia aperiam ab modi assumenda, sunt omnis. Sit, ea, quibusdam maiores fuga ipsam rem iure autem in deleniti modi incidunt.',
        creationDate: new Date(),
        duration: 121,
        authors: ['Dave Haisenber, Tony Ja'],
      },
      {
        title: 'Java',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero voluptas libero. Voluptas sed consequatur laborum doloribus numquam eaque fuga architecto, officia aperiam ab modi assumenda, sunt omnis. Sit, ea, quibusdam maiores fuga ipsam rem iure autem in deleniti modi incidunt.',
        creationDate: new Date(),
        duration: 90,
        authors: ['Dave Simmonds, Nikolas Le-Mark'],
      },
      {
        title: 'Java',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero voluptas libero. Voluptas sed consequatur laborum doloribus numquam eaque fuga architecto, officia aperiam ab modi assumenda, sunt omnis. Sit, ea, quibusdam maiores fuga ipsam rem iure autem in deleniti modi incidunt.',
        creationDate: new Date(),
        duration: 45,
        authors: ['Dave Simmonds, Nikolas Le-Mark'],
      }
]


// export const COURSE_LIST:CourseCard[] = []