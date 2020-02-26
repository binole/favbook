import React from 'react';
import { Box, Image, Flex, Heading, Text, Icon } from '@chakra-ui/core';
import { Book } from '../models/Book';
import Skeleton from './Skeleton';

type Props = {
  book?: Book;
};

export default function BookItem({ book }: Props) {
  return (
    <Box p={4}>
      <Flex>
        <Box
          width={80}
          minH={104}
          bg='gray.200'
          boxShadow='0 4px 8px rgba(0,0,0,0.08)'
          borderRadius='md'
        >
          {book?.thumbnail && (
            <Image src={book?.thumbnail} alt='' borderRadius='md' />
          )}
        </Box>
        <Box px={4} py={1} flex={1}>
          {book ? (
            <>
              <Heading as='h3' size='sm' color='gray.700'>
                {book?.title}
                {book?.subtitle && (
                  <>
                    {': '}
                    <Text
                      size='sm'
                      fontWeight='normal'
                      color='gray.700'
                      display='inline'
                    >
                      {book.subtitle}
                    </Text>
                  </>
                )}
              </Heading>
              <Text fontSize='sm' color='gray.600'>
                {book?.authors?.join(', ')}
              </Text>
              {book?.averageRating && (
                <Text fontSize='xs' fontWeight='bold' color='gray.700' my={1}>
                  <Icon name='star' color='yellow.400' />{' '}
                  {book?.averageRating?.toFixed(2)}
                </Text>
              )}
            </>
          ) : (
            <>
              <Skeleton maxWidth={240} />
              <Skeleton maxWidth={200} />
              <Skeleton maxWidth={200} />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
