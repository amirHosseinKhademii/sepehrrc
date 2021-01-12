import {
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
import { useDesign } from 'hooks';

interface IHeader {
  children?: any;
  item: {};
  backgroundColor?: string;
}
const logo = '/assets/images/logo.png';

const item5 = {
  id: '0',
  type: 'header',
  title: 'هدر',

  Button: { text: 'محصولات فروشگاه' },
  menuItems: [
    { text: 'صفحه اصلی', link: './admin/design' },
    { text: 'محصولات فروشگاه', link: './admin/design' },
    { text: 'درباره ما', link: './admin/design' },
    { text: 'تماس باما', link: './admin/design' },
  ],
};

export const DesignHeader = () => {
  const { designState } = useDesign();
  const item = designState.pageItems.find((item) => item.uuid === 'HEADER');

  const Headers = ({ item }) => {
    if (
      !item.settings ||
      !item.settings.style ||
      item.settings.style === 'first'
    )
      return <HeaderFirst item={item} />;
    else if (item.settings.style === 'second')
      return <HeaderSecond item={item} />;
    else if (item.settings.style === 'third')
      return <HeaderThird item={item} />;
    else if (item.settings.style === 'fourth')
      return <HeaderFourth item={item} />;
    else if (item.settings.style === 'fifth')
      return <HeaderFifth item={item} />;
    else if (item.settings.style === 'sixth')
      return <HeaderSixth item={item} />;
    else if (item.settings.style === 'seventh')
      return <HeaderSeventh item={item} />;
    else if (item.settings.style === 'eighth')
      return <HeaderEighth item={item} />;
  };
  return (
    <Fragment>
      <Headers item={item} />
    </Fragment>
  );
};
