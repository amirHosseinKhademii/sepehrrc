import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { request, gql } from 'graphql-request';
//import { appendStyle } from 'utils';

export default function Home({ newStyle }) {
  const { push } = useRouter();

  useEffect(() => {
    //appendStyle({ theme: newStyle.getStyles[2].style });
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

// export async function getServerSideProps() {
//   const newStyle = await request(
//     'https://api-amirgraphql-v3.herokuapp.com/',
//     gql`
//       query {
//         getStyles {
//           style
//         }
//       }
//     `
//   );
//   return {
//     props: { newStyle },
//   };
// }
