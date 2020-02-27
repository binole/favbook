import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import { Logo } from './Logo';

type Props = {
  fullScreen?: boolean;
  search: React.ReactNode;
};

export function Header({ fullScreen, search }: Props) {
  return (
    <Flex
      direction={fullScreen ? 'column' : 'row'}
      height={fullScreen ? '100%' : { base: '56px', md: '64px' }}
      align='center'
      px={{ base: 4, md: 6 }}
      borderBottom='1px'
      borderColor='gray.100'
      bg='rgba(255,255,255,0.96)'
      pos='fixed'
      w='100%'
      top={0}
    >
      <Logo
        size={fullScreen ? '2xl' : 'lg'}
        mt={fullScreen ? 120 : 0}
        mb={fullScreen ? 6 : 0}
      />
      <Box ml={6} mr={6} w='100%' maxW={560}>
        {search}
      </Box>
    </Flex>
  );
}
