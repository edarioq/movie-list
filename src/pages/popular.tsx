import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { MovieData } from 'models';
import { Main, Heading, Loading, MovieList } from 'components';

const Home: NextPage = () => {
  const [movies, setMovies] = useState<MovieData>();

  const getMovies = async (): Promise<{ data: MovieData }> => {
    const data = await fetch('api/movie/popular');
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
        <title>Popular Movies - Flex</title>
        <meta
          name="description"
          content="Friendly SEO description goes here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading
        size="h1"
        text="Popular Movies"
        textAlign="left"
        topMargin={0}
        topPadding={0}
      />

      {movies ? <MovieList data={movies} /> : <Loading />}
    </Main>
  );
};

export default Home;
