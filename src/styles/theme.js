import { ThemeProvider } from 'styled-components';

import { options as theme } from './themes/default';
import { GlobalStyles } from './globals';

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);