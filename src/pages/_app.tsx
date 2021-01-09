import '../styles/index.css';
import { UiProvider } from 'providers/ui-provider';
import { DesignProvider } from 'providers/design-provider';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <UiProvider>
        <DesignProvider>
          <Component {...pageProps} />
        </DesignProvider>
      </UiProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
