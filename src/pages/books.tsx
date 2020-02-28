import React from 'react';
import { Box } from '@chakra-ui/core';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { BookList } from '../components/BookList';
import { Header } from '../components/Header';
import { SearchForm } from '../components/SearchForm';
import { Empty } from '../components/Empty';
import { BookService, useBookService } from '../services/useBookService';
import BookNotFoundSrc from '../images/book-not-found.svg';

export default function BooksContainer() {
  const [state, actions] = useBookService();

  return <BooksPage {...state} {...actions} />;
}

export function BooksPage({ status, books, search, loadMore }: BookService) {
  return (
    <Layout
      header={
        <Header
          fullScreen={status === 'idle'}
          search={<SearchForm onSearch={search} />}
        />
      }
    >
      <Box py={{ md: 4 }} mx='auto'>
        <BookList books={books} />
        {status === 'loading' && <BookList data-testid='book-loading' />}
        {status === 'empty' && (
          <Empty
            image={BookNotFoundSrc}
            heading='Books not found!'
            description='No results containing all your search terms were found. Please try another keywords.'
          />
        )}
        {status === 'hasMore' && (
          <Box textAlign='center' py={2}>
            <Button fontWeight='normal' onClick={loadMore}>
              View more books
            </Button>
          </Box>
        )}
      </Box>
    </Layout>
  );
}
