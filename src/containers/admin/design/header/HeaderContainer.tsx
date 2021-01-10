import { Header } from 'components';
interface IHeader {
  children?: any;
  item: {};
  backgroundColor?: string;
}
const logo = '/assets/images/logo.png';

const item = {
  id: '0',
  type: 'header',
  title: 'هدر',
  hasButton: true,
  Button: { text: 'محصولات فروشگاه', link: '#' },
  order: ['logo', 'menu', 'icons'],
  logo: {
    img: logo,
    link: './admin/design',
  },
  menuItems: [
    { text: 'صفحه اصلی', link: './admin/design' },
    { text: 'محصولات فروشگاه', link: './admin/design' },
    { text: 'درباره ما', link: './admin/design' },
    { text: 'تماس باما', link: './admin/design' },
  ],
  icons: [
    {
      type: 'search',
      link: './admin/design',
    },
    {
      type: 'cart',
      link: './admin/design',
    },
    {
      type: 'user',
      link: './admin/design',
    },
  ],
};
export const DesignHeader = ({ backgroundColor = 'bg-white' }) => {
  return <Header variation="ninth" item={item} />;
};
