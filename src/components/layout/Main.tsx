import styled from 'styled-components';
import { ThemeProps } from 'theme';

export const Main = styled.main`
  grid-column: 2;
  grid-row: 2;
  height: ${(p: ThemeProps) => `calc(100vh - ${p.theme.headerHeight} - 60px)`};
  overflow: auto;
  position: relative;
  width: calc(100% - 16px);
`;
