import { FC, Fragment } from 'react';
import { IHeader } from './interface';
import {
  Navbar,
  HeaderLogo,
  HeaderActions,
  HeaderButton,
} from './dependencies';
const logo = '/assets/images/logo.png';

export const HeaderFifth: FC<IHeader> = ({ item }) => {
  return (
    <div className={`bg-white shadow-large-1`}>
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
            <HeaderActions variation="fourth" />
            <HeaderButton>ورود/عضویت</HeaderButton>
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
          <HeaderActions variation="Tel" tel="065956298" />
        </div>
      </div>
    </div>
  );
};
