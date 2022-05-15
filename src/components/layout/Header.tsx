import React, { LegacyRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ThemeProps } from 'theme';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 150px auto;
  position: relative;
  padding: 25px 0;
  margin: 12px auto;
`;

const Logo = styled.div`
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(p: ThemeProps) => p.theme.colors.dark2};
  text-transform: uppercase;
  text-decoration: none;
  transition: ${(p: ThemeProps) => p.theme.transition};
  position: relative;
  z-index: 100;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 25px);
    height: 30px;
    border-radius: ${(p: ThemeProps) => p.theme.borderRadius};
    background-color: ${(p: ThemeProps) => p.theme.colors.dark2};
    z-index: -1;
    opacity: 0;
    visibility: hidden;
  }
  &.active {
    color: ${(p: ThemeProps) => p.theme.colors.light1};
    &:after {
      opacity: 1;
      visibility: visible;
    }
  }
  &:hover {
    &:not(.active) {
      color: ${(p: ThemeProps) => p.theme.colors.red1};
    }
  }
`;

interface LinkItem {
  id: number;
  name: string;
  url: string;
}

const LogoImage = React.forwardRef(
  ({ onClick, href }: any, ref: LegacyRef<HTMLAnchorElement>) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <Image
          src="/images/logo-c-color.svg"
          alt="Movie List"
          width={150}
          height={150}
        />
      </a>
    );
  }
);

export function Header() {
  const router = useRouter();

  const links: LinkItem[] = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About', url: '/about' },
  ];

  return (
    <StyledHeader className="container">
      <Logo>
        <Link href="/" replace passHref>
          <LogoImage />
        </Link>
      </Logo>
      <Nav>
        <ul className="flex">
          {links
            ? links.map((link) => {
                return (
                  <li key={link.name}>
                    <Link href={link.url} replace passHref>
                      <NavLink
                        className={router.pathname === link.url ? 'active' : ''}
                      >
                        {link.name}
                      </NavLink>
                    </Link>
                  </li>
                );
              })
            : null}
        </ul>
      </Nav>
    </StyledHeader>
  );
}
