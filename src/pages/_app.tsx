import 'normalize.css/normalize.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { GlobalStyle } from 'theme';
import type { AppProps } from 'next/app';
import { Header, Footer } from '../components';
import { Provider } from 'react-redux';
import store from '../state/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
