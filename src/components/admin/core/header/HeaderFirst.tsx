import { FC } from 'react';
import { IHeader } from './interface';
import {
  HeaderButton,
  Navbar,
  HeaderLogo,
  HeaderActions,
} from './dependencies';
const logo = '/assets/images/logo.png';

export const HeaderFirst: FC<IHeader> = ({ item }) => {
  return (
    <div className={`bg-white shadow-large-1`}>
      <div
        className={` grid  grid-cols-12 w-full h-122px container mx-auto     `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-1  flex items-center ">
          <HeaderLogo src={logo} />
        </div>
        <div className="col-span-7 flex items-center mr-6 ">
          <Navbar direction="horizental" items={item.menuItems} />
        </div>
        <div className="col-span-4 flex items-center justify-end">
          <HeaderActions variation="first" tel="0659565878" />

          <HeaderButton className="mr-35px">محصولات فروشگاه</HeaderButton>
        </div>
      </div>
    </div>
  );
};
