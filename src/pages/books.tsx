import React from 'react';
import { Box } from '@chakra-ui/core';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { BookList } from '../components/BookList';
import { withBookStore, BookStore } from '../containers/BookStore';
import { Header } from '../components/Header';
import { SearchForm } from '../components/SearchForm';

export function BooksPage({ books, loadBooks }: BookStore) {
  return (
    <Layout header={<Header search={<SearchForm onSearch={loadBooks} />} />}>
      <Box px={{ md: '104px' }} py={{ md: 4 }} maxW={800}>
        <BookList books={books} />
        <Box textAlign='center' py={2}>
          <Button fontWeight='normal'>View more books</Button>
        </Box>
      </Box>
    </Layout>
  );
}

export default withBookStore(BooksPage);
