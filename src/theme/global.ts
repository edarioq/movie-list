import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from 'theme';

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
  }
  html,
  body {
    font: normal 300 14px/1 ${(p: ThemeProps) => p.theme.fonts.mainFont};
    color: ${(p: ThemeProps) => p.theme.colors.light1};
    background-color: ${(p: ThemeProps) => p.theme.colors.dark3};
    overflow: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin: 10px 0;
    padding: 10px 0;
    position: relative;
    line-height: 1.5;
    text-transform: uppercase;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  h6 {
    font-size: 1rem;
  }
  p,
  span {
    line-height: 1.8;
    position: relative;
  }
  p {
    font-size: 1.2rem;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
  ul.flex,
  ol.flex {
    display: flex;
    align-items: center;
    position: relative;
    li {
      margin: 0 1.5rem;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  ul.list,
  ol.list {
    list-style-type: none;
    li {
      line-height: 1;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
  ul li,
  ol li {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      margin-right: 1rem;
    }
  }
  a {
    font-family: ${(p: ThemeProps) => p.theme.fonts.mainFont};
    color: ${(p: ThemeProps) => p.theme.colors.blue1};
    transition: ${(p: ThemeProps) => p.theme.transition};
    text-decoration: none;
    &:hover {
      color: ${(p: ThemeProps) => p.theme.colors.blue2};
    }
  }
  .overflow {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .relative {
    position: relative;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
