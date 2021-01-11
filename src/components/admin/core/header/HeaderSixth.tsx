import { FC, Fragment } from 'react';
import { IHeader } from './interface';
import {
  Navbar,
  HeaderLogo,
  HeaderActions,
  HeaderButton,
  HeaderInput,
} from './dependencies';
const logo = '/assets/images/logo.png';

export const HeaderSixth: FC<IHeader> = ({ item }) => {
  return (
    <div className="bg-white shadow-large-1">
      <div className="border-b-2">
        <div
          className={` grid  grid-cols-12    w-full h-122px  container mx-auto`}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center justify-start ">
            <HeaderLogo src={logo} />
          </div>
          <div className="col-span-7 flex items-center  justify-center ">
            <HeaderInput className="w-450px" />
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <HeaderActions variation="second" tel="0659565878" />
            <HeaderButton>ورود یاعضویت</HeaderButton>
          </div>
        </div>
      </div>
      <div
        className={`grid  grid-cols-12   w-full h-58px  container mx-auto `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <Navbar direction="horizental" items={item.menuItems} />
        </div>
        <div className="col-span-3 flex items-center justify-end">
          <HeaderActions variation="social" />
        </div>
      </div>
    </div>
  );
};
