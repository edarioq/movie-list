import { render, screen } from '@testing-library/react';
import { MovieList } from 'components';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { MovieData } from 'models';
import { Provider } from 'react-redux';
import store from '../src/state/store';

describe('Movie List', () => {
  const data: MovieData = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

  it('loads', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MovieList data={data} />
        </ThemeProvider>
      </Provider>
    );
    const section = screen.getByTestId('container');
    expect(section).toBeTruthy();
    expect(section).toHaveTextContent('There are no movies to display');
  });
});

describe('Movie List', () => {
  const data: MovieData = {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: '/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg',
        genre_ids: [28, 878, 35, 10751, 12],
        id: 675353,
        original_language: 'en',
        original_title: 'Sonic the Hedgehog 2',
        overview: "He's a fast alien",
        popularity: 12295.749,
        poster_path: '',
        release_date: '2022-03-30',
        title: 'Sonic the Hedgehog 2',
        video: false,
        vote_average: 7.7,
        vote_count: 1347,
      },
    ],
    total_pages: 0,
    total_results: 0,
  };

  it('shows a list of movies', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MovieList data={data} />
        </ThemeProvider>
      </Provider>
    );

    const section = screen.getByTestId('container');
    const card = screen.getByTestId('card');
    expect(section).not.toBeEmptyDOMElement();
    expect(card).toBeVisible();
  });
});
