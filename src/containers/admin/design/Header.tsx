import { Navbar, Button } from 'components';
import { Search, ShoppingCart, UsersAlt } from 'icons';
import Link from 'next/link';

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
    link: '#',
  },
  menuItems: [
    { text: 'صفحه اصلی', link: '#' },
    { text: 'محصولات فروشگاه', link: '#' },
    { text: 'درباره ما', link: '#' },
    { text: 'تماس باما', link: '#' },
  ],
  icons: [
    {
      type: 'search',
      link: '#',
    },
    {
      type: 'cart',
      link: '#',
    },
    {
      type: 'user',
      linik: '#',
    },
  ],
};
export const Header = ({ backgroundColor = 'bg-white' }) => {
  return (
    <div className={`${backgroundColor}`}>
      <div
        className={`container mx-auto   w-full h-122px grid  grid-cols-12`}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-1  flex items-center ">
          <Link href={item.logo.link}>
            <img
              src={item.logo.img}
              style={{ width: '138px', height: '72px' }}
            />
          </Link>
        </div>
        <div className="col-span-7 flex items-center ">
          <Navbar direction="horizental" items={item.menuItems} />
        </div>
        <div className="col-span-4 flex items-center justify-end">
          <div className="flex justify-self-end">
            <Link href={item.icons[0].link}>
              <Search fontSize="24px" className="mx-4" />
            </Link>
            <Link href={item.icons[1].link}>
              <ShoppingCart fontSize="24px" className="mx-4" />
            </Link>
            <Link href={item.icons[2].link}>
              <UsersAlt fontSize="24px" className="mx-4" />
            </Link>
          </div>
          {item.hasButton ? (
            <Button className="px-8 bg-red-600 justify-self-end py-4 rounded-full   text-16px">
              {item.Button.text}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
