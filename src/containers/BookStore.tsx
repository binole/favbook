import React from 'react';
import axios from 'axios';
import { Volume } from '../domain/Volume';

interface SearchParams {
  q: string;
  startIndex?: number;
  maxResults?: number;
}

export interface BookStore {
  status?: string;
  nextIndex?: number;
  books: Volume[];
  loadBooks: (params: SearchParams) => void;
}

export function withBookStore<P extends {}>(
  WrappedComponent: React.ComponentType<P & BookStore>
) {
  return function BookStoreContainer(props: P) {
    const [state, setState] = React.useState({
      status: 'idle',
      nextIndex: 0,
      books: []
    });

    async function loadBooks({
      q,
      startIndex = 0,
      maxResults = 12
    }: SearchParams) {
      if (!q.trim()) return;

      setState({ ...state, status: 'loading' });

      const res = await axios.get(
        'https://www.googleapis.com/books/v1/volumes',
        { params: { q, startIndex, maxResults } }
      );

      setState(state => {
        const books = !res.data.totalItems
          ? []
          : startIndex
          ? [...state.books, ...res.data.items]
          : res.data.items;

        const nextIndex = books.length < res.data.totalItems ? books.length : 0;

        return {
          ...state,
          books,
          nextIndex,
          status: 'loaded'
        };
      });
    }

    return <WrappedComponent {...state} loadBooks={loadBooks} {...props} />;
  };
}
