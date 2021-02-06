import '../styles/index.css';
import { UiProvider } from 'providers/ui-provider';
import { DesignProvider } from 'providers/design-provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import { Fragment } from 'react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/effect-flip/effect-flip.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/components/a11y/a11y.scss';
import 'swiper/components/controller/controller.scss';

import 'react-alice-carousel/lib/alice-carousel.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        ></link>
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        ></link> */}
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
