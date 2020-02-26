import React from 'react';
import { Box } from '@chakra-ui/core';

import Theme from './Theme';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Theme>
      <Box bg='gray.50' minH='100vh' pt={16}>
        <Header />
        <Box as='main'>{children}</Box>
      </Box>
    </Theme>
  );
}

export default Layout;
