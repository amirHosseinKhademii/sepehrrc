import { useUi } from 'hooks';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { push } = useRouter();
  const { uiState } = useUi();

  useEffect(() => {
    push('./admin/design');
  }, []);

  useEffect(() => {
    const css = uiState.style,
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }, [uiState.style]);

  return (
    <div>
      <Head>
        <title>Sepehr Page Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </div>
  );
}
