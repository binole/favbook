import React from 'react';
import { BookList } from '../components/BookList';
import books from '../__fixtures__/volumes/q=react&startIndex=0&maxResults=12.json';

export default {
  title: 'BookList',
  component: BookList
};

export const Loading = () => <BookList />;
export const Loaded = () => <BookList books={books.items} />;
