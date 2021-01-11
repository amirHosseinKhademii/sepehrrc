import { FC, Fragment } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo, HeaderActions, HeaderInput } from './dependencies';
const logo = '/assets/images/logo.png';

export const HeaderSeventh: FC<IHeader> = ({ item }) => {
  return (
    <div className="bg-white shadow-large-1">
      <div className="border-b-2">
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
      <div className="bg-red-600 text-white">
        <div
          className={`grid  grid-cols-12    w-full h-58px  container mx-auto `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-3 flex items-center justify-end">
            <HeaderActions
              variation="Tel"
              iconColor="#fff"
              tel="03152895885"
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
