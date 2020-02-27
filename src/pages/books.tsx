import React from 'react';
import { Box } from '@chakra-ui/core';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { BookList } from '../components/BookList';
import { withBookStore, BookStore } from '../containers/BookStore';
import { Header } from '../components/Header';
import { SearchForm } from '../components/SearchForm';

export function BooksPage({
  nextIndex = 0,
  status,
  books,
  loadBooks
}: BookStore) {
  const [q, setQ] = React.useState('');

  function onLoadBooks(q: string) {
    setQ(q);
    loadBooks({ q });
  }

  function onLoadMore() {
    loadBooks({ q, startIndex: nextIndex });
  }

  return (
    <Layout header={<Header search={<SearchForm onSearch={onLoadBooks} />} />}>
      {status !== 'idle' && (
        <Box px={{ md: '104px' }} py={{ md: 4 }} maxW={800}>
          <BookList books={books} />
          {status === 'loading' && <BookList data-testid='book-loading' />}
          {status === 'loaded' && nextIndex > 0 && (
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
