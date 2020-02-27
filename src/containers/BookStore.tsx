import React from 'react';
import axios from 'axios';
import { Volume } from '../domain/Volume';

export interface BookStore {
  status?: string;
  books: Volume[];
  loadBooks: (term: string) => void;
}

export function withBookStore<P extends {}>(
  WrappedComponent: React.ComponentType<P & BookStore>
) {
  return function BookStoreContainer(props: P) {
    const [status, setStatus] = React.useState('idle');
    const [books, setBooks] = React.useState([]);

    async function loadBooks(term: string) {
      setStatus('loading');

      const res = await axios.get(
        'https://www.googleapis.com/books/v1/volumes',
        {
          params: {
            q: term,
            startIndex: 0,
            maxResults: 12
          }
        }
      );

      setBooks(res.data.items);
      setStatus('loaded');
    }

    return (
      <WrappedComponent
        status={status}
        books={books}
        loadBooks={loadBooks}
        {...props}
      />
    );
  };
}
