import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MovieData } from 'models';
import { showPoster } from 'utils';
import styled from 'styled-components';
import { theme, ThemeProps } from 'theme';
import { Star } from 'tabler-icons-react';

interface Props {
  data: MovieData;
}

interface StyleProps extends ThemeProps {
  col: string;
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 50px;
`;
const MovieStar = styled.div`
  opacity: 0;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: ${(p: ThemeProps) => p.theme.transition};
  z-index: 10;
  width: 20px;
  height: 20px;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: ${(p: ThemeProps) => p.theme.colors.dark3};
    z-index: -1;
  }
`;
const MoviePoster = styled(Image)`
  width: 200px;
  height: 350px;
  border-radius: ${(p: ThemeProps) => p.theme.borderRadius};
  border: 2px solid transparent !important;
`;
const MovieCard = styled.div`
  width: 200px;
  height: 400px;
  border-radius: ${(p: ThemeProps) => p.theme.borderRadius};
  cursor: pointer;
  &:hover ${MoviePoster} {
    border: 2px solid ${(p: ThemeProps) => p.theme.colors.gold1} !important;
  }
  &:hover ${MovieStar} {
    opacity: 1;
  }
`;
const MovieTitle = styled.div`
  margin-top: 10px;
  color: ${(p: ThemeProps) => p.theme.colors.light2};
`;
const MovieInfo = styled.div`
  display: grid;
  grid-template-columns: ${(p: StyleProps) => (p.col ? p.col : '1fr')};
  margin-top: 8px;
  color: ${(p: StyleProps) => p.theme.colors.light3};
  text-align: left;
`;

export function MovieList(props: Props) {
  const [movies] = useState<MovieData>(props.data);

  const starMovie = (m: any) => {
    console.debug(m);
  };

  useEffect(() => {
    console.debug(movies);
  }, [movies]);

  return (
    <Container>
      {movies
        ? movies.results.map((m) => {
            return (
              <MovieCard key={m.id} onClick={() => starMovie(m)}>
                <MoviePoster
                  src={showPoster(m.poster_path)}
                  width={'200px'}
                  height={'300px'}
                  alt={m.title}
                />
                <MovieTitle className="overflow">{m.title}</MovieTitle>
                <MovieInfo col={'1fr'}>Released: {m.release_date}</MovieInfo>
                <MovieInfo col={'1fr'}>
                  Score: {m.vote_average} | Language:{' '}
                  {m.original_language.toUpperCase()}
                </MovieInfo>
                <MovieStar>
                  <Star size="20" color={theme.colors.gold1} />
                </MovieStar>
              </MovieCard>
            );
          })
        : null}
    </Container>
  );
}
