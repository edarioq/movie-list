import React, { LegacyRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { ThemeProps } from 'theme';

const StyledHeader = styled.header`
  display: grid;
  grid-column: 1 / span 2;
  grid-row: 1;
  grid-template-columns: 150px auto;
  height: ${(p: ThemeProps) => p.theme.headerHeight};
  width: 100%;
  background-color: ${(p: ThemeProps) => p.theme.colors.dark3};
  border-radius: ${(p: ThemeProps) => p.theme.borderRadius};
`;

const Logo = styled.div`
  cursor: pointer;
`;

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
  return (
    <StyledHeader>
      <Logo>
        <Link href="/" replace passHref>
          <LogoImage />
        </Link>
      </Logo>
      <div>stuff</div>
    </StyledHeader>
  );
}
