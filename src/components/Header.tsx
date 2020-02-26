import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import { Logo } from './Logo';

type Props = {
  search: React.ReactNode;
};

export function Header({ search }: Props) {
  return (
    <Flex
      align='center'
      height={{ base: '56px', md: '64px' }}
      px={{ base: 4, md: 6 }}
      borderBottom='1px'
      borderColor='gray.100'
      bg='rgba(255,255,255,0.96)'
      pos='fixed'
      w='100%'
      top={0}
    >
      <Logo />
      <Box marginLeft={6} w='100%' maxW={720}>
        {search}
      </Box>
    </Flex>
  );
}
