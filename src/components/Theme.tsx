import React from 'react';
import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core';

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

export function Theme({ children }: Props) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
}
