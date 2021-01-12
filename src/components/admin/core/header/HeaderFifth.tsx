import { FC, Fragment } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo, HeaderButton } from './dependencies';

import { ICSearch, ICShoppingCart, ICPhoneVolume } from 'icons';
const logo = '/assets/images/logo.png';

export const HeaderFifth: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <ICSearch className="mx-4" />
        <div className="relative mr-4 ">
          <ICShoppingCart />
          <div className="absolute  -right-8px -top-6px  w-18px h-18px bg-red-600 text-white rounded-full">
            <div className="h-full w-full flex justify-center items-center mt-2px  text-xs">
              25
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={`bg-white shadow-custom-1`}>
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
            <HeaderButton className="mr-25px">ورود/عضویت</HeaderButton>
          </div>
        </div>
      </div>
      <div
        className={`grid  grid-cols-12   w-full h-58px   container mx-auto `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <Navbar direction="horizental" items={item.menuItems} />
        </div>
        <div className="col-span-3 flex items-center justify-end">
          <div className="text-16px">09365464683</div>
          <ICPhoneVolume className="mr-4" />
        </div>
      </div>
    </div>
  );
};
