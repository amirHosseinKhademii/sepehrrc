import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    push('./admin/design');
  }, []);

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
