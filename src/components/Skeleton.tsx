import React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

export default function Skeleton(props: Partial<BoxProps>) {
  return (
    <Box borderRadius='md' height='12px' bg='gray.100' my={2} {...props} />
  );
}
