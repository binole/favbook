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
  books: Volume[];
  loadBooks: (params: SearchParams) => void;
}

export function withBookStore<P extends {}>(
  WrappedComponent: React.ComponentType<P & BookStore>
) {
  return function BookStoreContainer(props: P) {
    const [status, setStatus] = React.useState('idle');
    const [books, setBooks] = React.useState<Volume[]>([]);

    async function loadBooks(params: SearchParams) {
      if (!params.q.trim()) return;

      setStatus('loading');

      const res = await axios.get(
        'https://www.googleapis.com/books/v1/volumes',
        { params }
      );

      setBooks(books =>
        params.startIndex ? [...books, ...res.data.items] : res.data.items
      );

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
