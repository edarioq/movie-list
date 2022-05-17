import { render, screen } from '@testing-library/react';
import Home from 'pages';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    const heading = screen.getByRole('heading', {
      name: /All Movies/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
