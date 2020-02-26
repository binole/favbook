import React from 'react';
import books from '../__fixtures__/books.json';
import { BooksPage } from '../pages/books';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pages/Books',
  component: BooksPage
};

export const Default = () => (
  <BooksPage books={books.items} loadBooks={action('onLoadBooks')} />
);
