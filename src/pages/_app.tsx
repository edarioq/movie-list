import 'normalize.css/normalize.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { GlobalStyle } from 'theme';
import { Header, Sidebar } from '../components';
import { Provider } from 'react-redux';
import store from '../state/store';
import type { AppProps } from 'next/app';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  grid-template-rows: 60px auto;
  grid-gap: 16px;
  margin: 16px;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Sidebar />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
