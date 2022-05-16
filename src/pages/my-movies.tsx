import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { ThemeProps } from 'theme';
import { Heading, MovieList } from 'components';
import { useSelector } from 'react-redux';

const Main = styled.main`
  grid-column: 2;
  grid-row: 2;
  height: ${(p: ThemeProps) => `calc(100vh - ${p.theme.headerHeight} - 50px)`};
  overflow: auto;
`;

const Home: NextPage = () => {
  const movies = useSelector((state: any) => {
    return {
      page: 1,
      results: state.favorites,
      total_pages: 0,
      total_results: state.favorites.length,
    };
  });

  return (
    <Main>
      <Head>
        <title>My Movies - Flex</title>
        <meta
          name="description"
          content="Friendly SEO description goes here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading
        size="h1"
        text="My Movies"
        textAlign="left"
        topMargin={0}
        topPadding={0}
      />

      {movies ? <MovieList data={movies} /> : null}
    </Main>
  );
};

export default Home;
