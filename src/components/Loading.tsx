import styled, { keyframes } from 'styled-components';
import { ThemeProps } from 'theme';

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  @media screen and (max-width: ${(p: ThemeProps) => p.theme.breakpoint}) {
    width: 85%;
  }
`;

const Loader = styled.div`
  border: 4px solid ${(p: ThemeProps) => p.theme.colors.light1};
  border-top: 4px solid ${(p: ThemeProps) => p.theme.colors.gold1};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
`;

export function Loading() {
  return (
    <Container>
      <Loader />
    </Container>
  );
}
