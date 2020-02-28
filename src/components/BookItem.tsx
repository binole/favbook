import React from 'react';
import { Box, Image, Flex, Text, Icon, Stack } from '@chakra-ui/core';
import { Book } from '../domain/Book';
import { Skeleton } from './Skeleton';

type Props = {
  book?: Book;
};

export function BookItem({ book }: Props) {
  return (
    <Flex
      direction={{ base: 'row', md: 'column' }}
      align={{ base: 'flex-start', md: 'center' }}
      p={4}
    >
      <Box
        width={{ base: '64px', sm: '80px', md: 'auto' }}
        height={{ base: 'auto', md: '160px' }}
        minW={{ base: '64px', md: '120px' }}
        minH={{ base: '80px' }}
        bg='gray.200'
        boxShadow='0 4px 8px rgba(0,0,0,0.08)'
        borderRadius='md'
      >
        {book?.thumbnail && (
          <Image
            src={book?.thumbnail}
            alt=''
            borderRadius='md'
            maxW={{ base: '100%', md: 'none' }}
            maxH={{ base: 'none', md: '100%' }}
          />
        )}
      </Box>
      <Flex
        px={4}
        py={1}
        w='100%'
        mt={{ md: 4 }}
        direction='column'
        align={{ base: 'left', md: 'center' }}
        textAlign={{ base: 'left', md: 'center' }}
      >
        {book ? (
          <>
            <Text as='h3' fontSize='sm' color='gray.700' w='100%'>
              <strong>{book?.title}</strong>
              {book?.subtitle && `: ${book.subtitle}`}
            </Text>
            <Text fontSize='sm' color='gray.500'>
              {book?.authors?.join(', ')}
            </Text>
            {book?.averageRating && book?.ratingsCount && (
              <Stack isInline align='center' spacing={1}>
                <Icon name='star' color='yellow.400' size='12px' />
                <Text fontSize='xs' fontWeight='bold' color='gray.700' my={1}>
                  {book?.averageRating?.toFixed(2)}
                </Text>
                <Text
                  fontSize='xs'
                  color='gray.400'
                >{`(${book?.ratingsCount} ratings)`}</Text>
              </Stack>
            )}
          </>
        ) : (
          <>
            <Skeleton width='100%' maxWidth={360} />
            <Skeleton maxWidth={200} />
            <Skeleton maxWidth={200} />
          </>
        )}
      </Flex>
    </Flex>
  );
}
