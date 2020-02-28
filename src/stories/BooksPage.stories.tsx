import React from 'react';
import books from '../__fixtures__/volumes/q=react&startIndex=0&maxResults=12.json';
import { BooksPage } from '../pages/books';
import { action } from '@storybook/addon-actions';

export default {
  title: 'BooksPage',
  component: BooksPage
};

const actions = {
  search: action('search'),
  loadMore: action('loadMore')
};

export const Idle = () => <BooksPage status='idle' books={[]} {...actions} />;

export const Loading = () => (
  <BooksPage status='loading' books={[]} {...actions} />
);

export const Loaded = () => (
  <BooksPage status='loaded' books={books.items} {...actions} />
);

export const NoResults = () => (
  <BooksPage status='empty' books={[]} {...actions} />
);
