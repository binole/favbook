import React from 'react';
import books from '../__fixtures__/books.json';
import { Volume } from '../domain/Volume';

export interface BookStore {
  books: Volume[];
  loadBooks: (term: string) => void;
}

export function withBookStore<P extends {}>(
  WrappedComponent: React.ComponentType<P & BookStore>
) {
  return function BookStoreContainer(props: P) {
    const items = books.items;
    const loadBooks = (term: string) => {};

    return <WrappedComponent books={items} loadBooks={loadBooks} {...props} />;
  };
}
