import {
  Header,
  HeaderFirst,
  HeaderSecond,
  HeaderThird,
  HeaderFourth,
  HeaderFifth,
  HeaderSixth,
  HeaderSeventh,
  HeaderEighth,
} from 'components';
import { Fragment } from 'react';
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
  settings: {
    style: 'seventh',
  },
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

const Headers = ({ item }) => {
  if (!item.settings || !item.settings.style || item.settings.style === 'first')
    return <HeaderFirst item={item} />;
  else if (item.settings.style === 'second')
    return <HeaderSecond item={item} />;
  else if (item.settings.style === 'third') return <HeaderThird item={item} />;
  else if (item.settings.style === 'fourth')
    return <HeaderFourth item={item} />;
  else if (item.settings.style === 'fifth') return <HeaderFifth item={item} />;
  else if (item.settings.style === 'sixth') return <HeaderSixth item={item} />;
  else if (item.settings.style === 'seventh')
    return <HeaderSixth item={item} />;
  else if (item.settings.style === 'eighth') return <HeaderSixth item={item} />;
};
export const DesignHeader = () => {
  return (
    <Fragment>
      <Headers item={item} />
    </Fragment>
  );
};
