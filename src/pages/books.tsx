import React from 'react';
import { Box } from '@chakra-ui/core';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { BookList } from '../components/BookList';
import { withBookStore, BookStore } from '../containers/BookStore';
import { Header } from '../components/Header';
import { SearchForm } from '../components/SearchForm';

export function BooksPage({ status, books, loadBooks }: BookStore) {
  const [state, setState] = React.useState({
    q: '',
    startIndex: 0,
    maxResults: 12
  });

  const fetchBooks = React.useCallback(loadBooks, []);

  function onSearch(q: string) {
    setState({ ...state, q, startIndex: 0 });
  }

  function onLoadMore() {
    setState({ ...state, startIndex: books.length });
  }

  React.useEffect(() => {
    fetchBooks(state);
  }, [fetchBooks, state]);

  return (
    <Layout header={<Header search={<SearchForm onSearch={onSearch} />} />}>
      {status !== 'idle' && (
        <Box px={{ md: '104px' }} py={{ md: 4 }} maxW={800}>
          <BookList books={books} />

          {status === 'loading' ? (
            <BookList data-testid='book-loading' />
          ) : (
            <Box textAlign='center' py={2}>
              <Button fontWeight='normal' onClick={onLoadMore}>
                View more books
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Layout>
  );
}

export default withBookStore(BooksPage);
