import React from 'react';
import books from '../__fixtures__/volumes/q=react&startIndex=0&maxResults=12.json';
import { BooksPage } from '../pages/books';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pages/Books',
  component: BooksPage
};

export const Idle = () => (
  <BooksPage
    status='idle'
    books={books.items}
    loadBooks={action('onLoadBooks')}
  />
);

export const Loading = () => (
  <BooksPage
    status='loading'
    books={books.items}
    loadBooks={action('onLoadBooks')}
  />
);

export const Loaded = () => (
  <BooksPage
    status='loaded'
    books={books.items}
    loadBooks={action('onLoadBooks')}
  />
);
