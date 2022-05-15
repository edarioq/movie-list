import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { ThemeProps } from 'theme';
import { useState, useEffect } from 'react';
import { MovieData } from 'models';
import { Heading } from 'components';

const Main = styled.main`
  grid-column: 2;
  grid-row: 2;
  height: ${(p: ThemeProps) => `calc(100vh - ${p.theme.headerHeight} - 50px)`};
  overflow: auto;
`;

const Home: NextPage = () => {
  const [movies, setMovies] = useState<MovieData>();

  const getMovies = async (): Promise<{ data: MovieData }> => {
    const data = await fetch('api/movie/top_rated');
    return await data.json();
  };

  useEffect(() => {
    getMovies().then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <Main>
      <Head>
        <title>Movie List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading
        size="h1"
        text="Favorite Movies"
        textAlign="left"
        topMargin={0}
        topPadding={0}
      />

      {/* {movies ? <MovieList data={movies} /> : null} */}
    </Main>
  );
};

export default Home;
