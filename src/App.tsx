import Router from '#components/services/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { useMemo } from 'react';
import usePrefersColorScheme from '#hooks/usePrefersColorScheme';
import DarkModeToggle from '#components/blocks/DarkModeToggle';

export default function App() {
  const queryClient = new QueryClient();

  const { isDarkMode } = usePrefersColorScheme();

  const theme = useMemo(() => {
    return isDarkMode ? darkTheme : lightTheme;
  }, [isDarkMode]);

  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router />
          <DarkModeToggle />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}
