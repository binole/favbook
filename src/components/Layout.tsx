import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/core';

import Theme from './Theme';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Theme>
      <Box bg='gray.50' minH='100vh' pt={16}>
        <Flex
          justify='center'
          align='center'
          height='56px'
          bg='white'
          pos='fixed'
          w='100%'
          top={0}
        >
          <Heading as='a' fontSize='lg' fontWeight='bold' color='gray.600'>
            favbook
          </Heading>
        </Flex>
        <Box as='main'>{children}</Box>
      </Box>
    </Theme>
  );
}

export default Layout;
