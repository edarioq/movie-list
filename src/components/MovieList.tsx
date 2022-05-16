import { useState } from 'react';
import Image from 'next/image';
import { MovieData, Movie } from 'models';
import { showPoster } from 'utils';
import styled from 'styled-components';
import { theme, ThemeProps } from 'theme';
import { Star, FaceIdError } from 'tabler-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../state/favorites.slice';

interface Props {
  data: MovieData;
}

interface StyleProps extends ThemeProps {
  col: string;
  isFavorite?: any;
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
  ${(p: StyleProps) =>
    p.isFavorite
      ? `
    opacity: 1;
  `
      : null}
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
const PosterFallback = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  background-color: ${(p: ThemeProps) => p.theme.colors.dark4};
`;

export function MovieList(props: Props) {
  const [movies] = useState<MovieData>(props.data);
  const favorites = useSelector((state: any) => state.favorites);
  const dispatch = useDispatch();

  const starMovie = (mov: Movie, fav: Movie[]) => {
    if (mov && !isFavorite(mov, fav)) {
      dispatch(addMovie(mov));
    }
  };

  const isFavorite = (mov: Movie, fav: Movie[]) => {
    if (!fav) {
      return false;
    }
    return fav.find((m) => m.id == mov.id);
  };

  return (
    <Container>
      {movies.results.length
        ? movies.results.map((m) => {
            return (
              <MovieCard key={m.id} onClick={() => starMovie(m, favorites)}>
                {m.poster_path ? (
                  <MoviePoster
                    src={showPoster(m.poster_path)}
                    width={'200px'}
                    height={'300px'}
                    alt={m.title}
                  />
                ) : (
                  <PosterFallback>
                    <FaceIdError
                      className="absolute-center"
                      size="50"
                      color={theme.colors.light3}
                    />
                  </PosterFallback>
                )}
                <MovieTitle className="overflow">{m.title}</MovieTitle>
                <MovieInfo col={'1fr'}>Released: {m.release_date}</MovieInfo>
                <MovieInfo col={'1fr'}>
                  Score: {m.vote_average} | Language:{' '}
                  {m.original_language.toUpperCase()}
                </MovieInfo>
                <MovieStar col={''} isFavorite={isFavorite(m, favorites)}>
                  <Star
                    size="20"
                    color={theme.colors.gold1}
                    fill={
                      isFavorite(m, favorites)
                        ? theme.colors.gold1
                        : 'transparent'
                    }
                  />
                </MovieStar>
              </MovieCard>
            );
          })
        : 'There are no movies to display'}
    </Container>
  );
}
