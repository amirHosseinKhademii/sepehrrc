import '../styles/index.css';
import { UiProvider } from 'providers/ui-provider';
import { DndProvider } from 'providers/dnd-provider';

function MyApp({ Component, pageProps }) {
  return (
    <UiProvider>
      <DndProvider>
        <Component {...pageProps} />
      </DndProvider>
    </UiProvider>
  );
}

export default MyApp;
