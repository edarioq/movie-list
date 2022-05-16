import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ThemeProps } from 'theme';
import { Home, Movie, Star } from 'tabler-icons-react';

const LinkTitle = styled.a`
  display: grid;
  grid-template-columns: 25px auto;
  grid-column-gap: 10px;
  align-items: center;
  position: relative;
  height: 60px;
  padding: 0 20px;
  cursor: pointer;
  width: 100%;
  color: ${(p: ThemeProps) => p.theme.colors.light2};
  position: relative;
  &.active {
    color: ${(p: ThemeProps) => p.theme.colors.gold1};
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 3px;
      height: 100%;
      background-color: ${(p: ThemeProps) => p.theme.colors.gold1};
    }
  }
`;

const StyledSidebar = styled.nav`
  height: ${(p: ThemeProps) => `calc(100vh - ${p.theme.headerHeight} - 60px)`};
  width: 260px;
  background-color: ${(p: ThemeProps) => p.theme.colors.dark4};
  border-radius: ${(p: ThemeProps) => p.theme.borderRadius};
  z-index: 100;
  margin-left: 16px;
  @media screen and (max-width: ${(p: ThemeProps) => p.theme.breakpoint}) {
    width: 60px;
    cursor: pointer;
    ${LinkTitle} {
      span {
        display: none;
      }
    }
  }
`;

export function Sidebar() {
  const router = useRouter();

  return (
    <StyledSidebar>
      <ul>
        <li>
          <Link href="/" replace passHref>
            <LinkTitle className={router.pathname === '/' ? 'active' : ''}>
              <Home />
              <span>All Movies</span>
            </LinkTitle>
          </Link>
        </li>
        <li>
          <Link href="/my-movies" replace passHref>
            <LinkTitle
              className={router.pathname === '/my-movies' ? 'active' : ''}
            >
              <Star /> <span>My Movies</span>
            </LinkTitle>
          </Link>
        </li>
        <li>
          <Link href="/top-rated" replace passHref>
            <LinkTitle
              className={router.pathname === '/top-rated' ? 'active' : ''}
            >
              <Movie /> <span>Top Rated Movies</span>
            </LinkTitle>
          </Link>
        </li>
        <li>
          <Link href="/popular" replace passHref>
            <LinkTitle
              className={router.pathname === '/popular' ? 'active' : ''}
            >
              <Movie /> <span>Popular Movies</span>
            </LinkTitle>
          </Link>
        </li>
        <li>
          <Link href="/upcoming" replace passHref>
            <LinkTitle
              className={router.pathname === '/upcoming' ? 'active' : ''}
            >
              <Movie /> <span>Upcoming Movies</span>
            </LinkTitle>
          </Link>
        </li>
      </ul>
    </StyledSidebar>
  );
}
