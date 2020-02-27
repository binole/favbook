import React from 'react';
import { Heading, HeadingProps } from '@chakra-ui/core';

export function Logo({ size = 'lg', ...rest }: HeadingProps) {
  return (
    <Heading as='a' size={size} fontWeight='bold' color='gray.500' {...rest}>
      favbook
    </Heading>
  );
}
