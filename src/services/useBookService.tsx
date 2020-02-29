import React from 'react';
import axios from 'axios';
import { Volume } from '../domain/VolumesDTO';

type State = {
  status: 'idle' | 'loading' | 'loaded' | 'empty' | 'hasMore' | 'error';
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

    axios.get('https://www.googleapis.com/books/v1/volumes', { params }).then(
      ({ data: { totalItems = 0, items = [] } }) => {
        if (!totalItems) {
          setState(state => ({ ...state, books: [], status: 'empty' }));
        } else {
          setState(state => {
            const books = startIndex ? [...state.books, ...items] : items;
            const hasMore = totalItems > books.length;
            const status = hasMore ? 'hasMore' : 'loaded';

            return { ...state, books, status };
          });
        }
      },
      error => {
        setState(state => ({
          ...state,
          status: 'error',
          error
        }));
      }
    );
  }, [params]);

  return [state, { search, loadMore }];
}
