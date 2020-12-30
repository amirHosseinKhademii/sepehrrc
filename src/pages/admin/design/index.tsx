import { Design } from 'containers';

const index = ({ page }) => {
  return <Design />;
};

export default index;

export const getStaticProps = (context) => {
  return {
    revalidate: {},
    props: {
      page: 1,
    },
  };
};

// export const getServerSideProps = (context) => {
//   return {
//     props: {},
//   };
// };
