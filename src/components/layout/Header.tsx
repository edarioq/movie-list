import React, { LegacyRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { ThemeProps } from 'theme';
import { Input } from 'components';

const HeaderContainer = styled.header`
  display: grid;
  grid-column: 1 / span 2;
  grid-row: 1;
  grid-template-columns: 300px auto;
  height: ${(p: ThemeProps) => p.theme.headerHeight};
  background-color: ${(p: ThemeProps) => p.theme.colors.dark4};
  border-radius: ${(p: ThemeProps) => p.theme.borderRadius};
  margin: 0 16px;
  @media screen and (max-width: ${(p: ThemeProps) => p.theme.breakpoint}) {
    grid-template-columns: auto auto;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
`;
const LogoText = styled.div`
  color: ${(p: ThemeProps) => p.theme.colors.light1};
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
  margin-left: 5px;
  text-transform: lowercase;
`;
const LogoLetter = styled.span`
  color: ${(p: ThemeProps) => p.theme.colors.gold1};
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
`;

const LogoImage = React.forwardRef(
  ({ onClick, href }: any, ref: LegacyRef<HTMLAnchorElement>) => {
    return (
      <a className="flex" href={href} onClick={onClick} ref={ref}>
        <Image src="/images/dude.svg" alt="My Movies" width={30} height={30} />
        <LogoText>
          Fle<LogoLetter>x</LogoLetter>
        </LogoText>
      </a>
    );
  }
);

LogoImage.displayName = 'LogoImage';

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Link href="/" replace passHref>
          <LogoImage />
        </Link>
      </Logo>

      <Search>
        <Input
          id="search"
          type="text"
          placeholder="Search..."
          readOnly={true}
          cursor={'not-allowed'}
        />
      </Search>
    </HeaderContainer>
  );
}
