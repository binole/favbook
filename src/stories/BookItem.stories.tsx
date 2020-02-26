import React from 'react';
import BookItem from '../components/BookItem';

export default {
  title: 'BookItem',
  component: BookItem
};

const book = {
  id: '1',
  title: 'Learning React',
  subtitle: 'Functional Web Development with React and Redux',
  authors: ['Alex Banks', 'Eve Porcello'],
  thumbnail:
    'http://books.google.com/books/content?id=ycTADgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  averageRating: 5,
  ratingsCount: 1
};

export const Default = () => <BookItem book={book} />;

export const Loading = () => <BookItem />;
