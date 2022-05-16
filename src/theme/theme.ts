const darkTheme: ThemeColors = {
  light1: '#ffffff',
  light2: '#f1f1f1',
  light3: '#c0b7b1',
  light4: '#7a7265',
  dark1: '#000000',
  dark2: '#050505',
  dark3: '#272932',
  dark4: 'rgba(0,0,0,.25)',
  red1: '#ef050e',
  red2: '#fc4f56',
  red3: '#ffb2b5',
  blue1: '#279af1',
  blue2: '#83c7fa',
  blue3: '#dcf6ff',
  green1: '#7bc950',
  green2: '#b5e19c',
  green3: '#ebfbe4',
  gold1: '#eca400',
  gold2: '#ffc94b',
  gold3: '#ffe8ad',
};

const fonts: ThemeFonts = {
  mainFont: 'Tahoma, sans-serif',
};

export const theme: ThemeProviderProps = {
  fonts: fonts,
  colors: darkTheme,
  breakpoints: null,
  paddingContainer: '100px 0',
  transition: '150ms',
  borderRadius: '0.5em',
  headerHeight: '60px',
  sidebarWidth: '260px',
};

export interface ThemeColors {
  light1: string;
  light2: string;
  light3: string;
  light4: string;
  dark1: string;
  dark2: string;
  dark3: string;
  dark4: string;
  red1: string;
  red2: string;
  red3: string;
  green1: string;
  green2: string;
  green3: string;
  blue1: string;
  blue2: string;
  blue3: string;
  gold1: string;
  gold2: string;
  gold3: string;
}

export interface ThemeFonts {
  mainFont: string;
}

export interface ThemeProviderProps {
  fonts: ThemeFonts;
  colors: ThemeColors;
  breakpoints: any;
  paddingContainer: string;
  transition: string;
  borderRadius: string;
  headerHeight: string;
  sidebarWidth: string;
}

export interface ThemeProps {
  theme: ThemeProviderProps;
}
