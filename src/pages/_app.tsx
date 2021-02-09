import '../styles/index.css';
import '../styles/style.css';
import { UiProvider } from 'providers/ui-provider';
import { DesignProvider } from 'providers/design-provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <QueryClientProvider client={new QueryClient()}>
          <UiProvider>
            <DesignProvider>
              <Component {...pageProps} />
            </DesignProvider>
          </UiProvider>
        </QueryClientProvider>
      </main>
    </Fragment>
  );
}

export default MyApp;
