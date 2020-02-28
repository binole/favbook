import React from 'react';
import axios from 'axios';
import { Volume } from '../domain/VolumesDTO';

type State = {
  status: 'idle' | 'loading' | 'loaded' | 'empty' | 'hasMore';
  books: Volume[];
};

type Actions = {
  search: (q: string) => void;
  loadMore: () => void;
};

export type BookService = State & Actions;

export function useBookService(): [State, Actions] {
  const [state, setState] = React.useState<State>({
    status: 'idle',
    books: []
  });

  const [params, setParams] = React.useState({
    q: '',
    startIndex: 0,
    maxResults: 12
  });

  function search(q: string) {
    setParams({ ...params, q, startIndex: 0 });
  }

  function loadMore() {
    setParams({ ...params, startIndex: state.books.length });
  }

  React.useEffect(() => {
    const { q, startIndex } = params;

    if (!q.trim()) return;

    setState(state => ({ ...state, status: 'loading' }));

    axios
      .get('https://www.googleapis.com/books/v1/volumes', {
        params
      })
      .then(res => {
        setState(state => {
          const { totalItems, items = [] } = res.data;

          if (!totalItems) {
            return {
              ...state,
              books: [],
              status: 'empty'
            };
          }

          const books = startIndex ? [...state.books, ...items] : items;
          const hasMore = res.data.totalItems > books.length;

          return {
            ...state,
            books,
            status: hasMore ? 'hasMore' : 'loaded'
          };
        });
      });
  }, [params]);

  return [state, { search, loadMore }];
}
