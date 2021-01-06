import '../styles/index.css';
import { UiProvider } from 'providers/ui-provider';
import { DesignProvider } from 'providers/design-provider';

function MyApp({ Component, pageProps }) {
  return (
    <UiProvider>
      <DesignProvider>
        <Component {...pageProps} />
      </DesignProvider>
    </UiProvider>
  );
}

export default MyApp;
