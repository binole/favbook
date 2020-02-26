import React from 'react';
import {
  theme,
  ThemeProvider,
  CSSReset,
  Flex,
  Box,
  Heading
} from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: '"Avenir Next", sans-serif',
    body:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
    mono: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
  }
};

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
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
    </ThemeProvider>
  );
}

export default Layout;
