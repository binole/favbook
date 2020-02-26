import React from 'react';
import { Box } from '@chakra-ui/core';

import { Theme } from './Theme';

type Props = {
  header: React.ReactNode;
  children: React.ReactNode;
};

export function Layout({ header, children }: Props) {
  return (
    <Theme>
      <Box bg='white' minH='100vh' pt={16}>
        {header}
        <Box as='main'>{children}</Box>
      </Box>
    </Theme>
  );
}
