import React from 'react';
import BookItem from './BookItem';
import { Volume } from '../models/Volume';
import { List, ListItem } from '@chakra-ui/core';

type Props = {
  books?: Volume[];
};

export default function BookList({ books }: Props) {
  return (
    <List>
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
                <ListItem key={id}>
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
        : [1, 2, 3].map(i => (
            <ListItem key={i}>
              <BookItem />
            </ListItem>
          ))}
    </List>
  );
}
