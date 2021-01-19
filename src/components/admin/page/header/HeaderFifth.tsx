import { FC, Fragment } from 'react';
import { IHeader } from './interface';
import {
  Navbar,
  HeaderLogo,
  HeaderButton,
  MegaMenu,
  HeaderLayout,
} from './dependencies';

import { ICSearch, ICShoppingCart, ICPhoneVolume } from 'icons';
import { Badge, PureButton } from 'components';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderFifth: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <Link href="./">
          <a>
            <ICSearch className="mx-4" />
          </a>
        </Link>
        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root="mr-4"
        >
          <Link href="./">
            <a>
              <ICShoppingCart />
            </a>
          </Link>
        </Badge>
      </>
    );
  };
  return (
    <HeaderLayout>
      <div className="border-b-2">
        <div
          className={` grid  grid-cols-12  w-full h-122px container mx-auto   `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={logo} />
          </div>
          <div className="col-span-7 flex items-center mr-6 ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <Actions />
            <PureButton
              layout={true}
              className="h-50px mr-25px px-8  py-4 text-16px rounded-full bg-red-600 text-white     "
              text="ورود/عضویت"
            />
          </div>
        </div>
      </div>
      <div
        className={`grid  grid-cols-12   w-full h-58px   container mx-auto `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <MegaMenu />
        </div>
        <div className="col-span-3 ">
          <Link href="./">
            <a className="h-full flex items-center justify-end">
              <div className="text-16px">09365464683</div>
              <ICPhoneVolume className="mr-4" />
            </a>
          </Link>
        </div>
      </div>
    </HeaderLayout>
  );
};
