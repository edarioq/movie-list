import type { NextPage } from 'next';
import Head from 'next/head';
import { Main, Heading, Loading, MovieList } from 'components';
import { useSelector } from 'react-redux';

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

      {movies ? <MovieList data={movies} /> : <Loading />}
    </Main>
  );
};

export default Home;
