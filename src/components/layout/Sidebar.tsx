import styled from 'styled-components';
import { ThemeProps } from 'theme';

const StyledSidebar = styled.nav`
  height: ${(p: ThemeProps) => `calc(100vh - ${p.theme.headerHeight} - 50px)`};
  width: 260px;
  background-color: ${(p: ThemeProps) => p.theme.colors.dark3};
  border-radius: ${(p: ThemeProps) => p.theme.borderRadius};
  z-index: 100;
`;

export function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}
