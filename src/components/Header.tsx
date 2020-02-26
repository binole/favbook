import React from 'react';
import { Flex } from '@chakra-ui/core';
import SearchForm from './SearchForm';
import Logo from './Logo';

export default function Header() {
  return (
    <Flex
      align='center'
      height={{ base: '56px', md: '64px' }}
      px={{ base: 4, md: 6 }}
      borderBottom='1px'
      borderColor='gray.100'
      bg='white'
      pos='fixed'
      w='100%'
      top={0}
    >
      <Logo />
      <SearchForm marginLeft={6} w='100%' />
    </Flex>
  );
}
