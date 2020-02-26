import React from 'react';
import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Icon,
  AspectRatioBox
} from '@chakra-ui/core';
import { Book } from '../models/Book';
import Skeleton from './Skeleton';

type Props = {
  book?: Book;
};

export default function BookItem({ book }: Props) {
  return (
    <Box p={4}>
      <Flex>
        <AspectRatioBox
          ratio={80 / 104}
          width={80}
          bg='gray.200'
          boxShadow='0 4px 8px rgba(0,0,0,0.08)'
          borderRadius='md'
        >
          {book?.thumbnail ? (
            <Image src={book?.thumbnail} alt='' borderRadius='md' />
          ) : (
            <div />
          )}
        </AspectRatioBox>
        <Box px={4} py={1} flex={1}>
          {book ? (
            <>
              <Heading as='h3' size='sm' color='gray.700'>
                {[book?.title, book?.subtitle].join(': ')}
              </Heading>
              <Text fontSize='sm' color='gray.600'>
                {book?.authors?.join(', ')}
              </Text>
              <Text fontSize='xs' fontWeight='bold' color='gray.700' my={1}>
                <Icon name='star' color='yellow.400' />{' '}
                {book?.averageRating?.toFixed(2)}
              </Text>
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
