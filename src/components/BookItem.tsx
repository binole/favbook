import React from 'react';
import { Box, Image, Flex, Heading, Text, Icon, Stack } from '@chakra-ui/core';
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
            <Skeleton width='100%' maxWidth={240} />
            <Skeleton maxWidth={200} />
            <Skeleton maxWidth={200} />
          </>
        )}
      </Flex>
    </Flex>
  );
}
