import { FC } from 'react';
import { IHeader } from './interface';
import { HeaderButton, Navbar, HeaderLogo, HeaderLayout } from './dependencies';
import { ICSearch, ICShoppingCart, ICUsersAlt } from 'icons';
import { PureButton } from 'components';
import Link from 'next/link';
const logo = '/assets/images/logo.png';

export const HeaderFirst: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <Link href="/">
          <a>
            <ICSearch className="mx-2" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <ICShoppingCart className="mx-2" />{' '}
          </a>
        </Link>
        <Link href="/">
          <a>
            <ICUsersAlt className="mx-2" />
          </a>
        </Link>
      </>
    );
  };
  console.log(item, 'item');

  return (
    <HeaderLayout>
      <div
        className=" grid  grid-cols-12 w-full h-122px container mx-auto     "
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-2  flex items-center ">
          <HeaderLogo src={item.images} />
        </div>
        <div className="col-span-6 flex items-center mr-6 ">
          <Navbar direction="horizental" items={item.menuItems} />
        </div>
        <div className="col-span-4 flex items-center justify-end">
          <Actions />
          <PureButton
            layout={true}
            className="h-50px px-8 mr-35px  py-4 text-16px rounded-full bg-red-600 text-white     "
            text={!item.buttonText ? 'محصولات فروشگاه' : item.buttonText}
          />
        </div>
      </div>
    </HeaderLayout>
  );
};
