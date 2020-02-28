import React from 'react';
import { BookItem } from './BookItem';
import { Volume } from '../domain/VolumesDTO';
import { List, ListItem } from '@chakra-ui/core';

type Props = {
  books?: Volume[];
};

export function BookList({ books, ...rest }: Props) {
  return (
    <List display='flex' flexWrap='wrap' {...rest}>
      {books
        ? books.map(
            ({
              id,
              volumeInfo: {
                title,
                subtitle,
                authors,
                imageLinks,
                averageRating,
                ratingsCount
              }
            }) => {
              return (
                <ListItem
                  key={id}
                  data-testid='book-item'
                  width={{ base: '100%', md: 1 / 4, xl: 1 / 6 }}
                >
                  <BookItem
                    book={{
                      id,
                      title,
                      subtitle,
                      authors,
                      averageRating,
                      ratingsCount,
                      thumbnail: imageLinks?.thumbnail
                    }}
                  />
                </ListItem>
              );
            }
          )
        : Array.from({ length: 12 }).map((_, i) => (
            <ListItem key={i} width={{ base: '100%', md: 1 / 4, xl: 1 / 6 }}>
              <BookItem />
            </ListItem>
          ))}
    </List>
  );
}
