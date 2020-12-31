import '../styles/index.css';
import { UiProvider } from 'providers/ui-provider';

function MyApp({ Component, pageProps }) {
  return (
    <UiProvider>
      <Component {...pageProps} />
    </UiProvider>
  );
}

export default MyApp;
