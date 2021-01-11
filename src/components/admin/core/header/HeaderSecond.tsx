import { FC } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo, HeaderActions } from './dependencies';

const logo = '/assets/images/logo.png';

export const HeaderSecond: FC<IHeader> = ({ item }) => {
  return (
    <div className="bg-white shadow-large-1">
      <div
        className={` grid  grid-cols-12 container mx-auto  w-full h-122px `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-6 flex items-center ">
          <Navbar direction="horizental" items={item.menuItems} />
        </div>
        <div className="col-span-1  flex items-center ">
          <HeaderLogo src={logo} />
        </div>
        <div className="col-span-5 flex items-center justify-end">
          <HeaderActions variation="third" />
        </div>
      </div>
    </div>
  );
};
