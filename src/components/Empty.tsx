import React from 'react';
import { Heading, Image, Text, Box } from '@chakra-ui/core';

type Props = {
  image?: string;
  heading?: string;
  description?: string;
};

export function Empty({ image, heading, description }: Props) {
  return (
    <Box textAlign='center' px={4} py={12} maxW={400} mx='auto'>
      <Image src={image} alt='' height={100} mx='auto' />
      {heading && (
        <Heading fontSize='md' mt={6} mb={2}>
          {heading}
        </Heading>
      )}
      {description && (
        <Text fontSize='sm' color='gray.500'>
          {description}
        </Text>
      )}
    </Box>
  );
}
