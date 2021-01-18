import { FC } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo } from './dependencies';
import { ICSearch, ICShoppingCart } from 'icons';
import { Badge } from 'components';
const logo = '/assets/images/logo.png';

export const HeaderSecond: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <div className="ml-8px">ورود/عضویت در سایت</div>
        <ICSearch className="mx-4" />
        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
        >
          <ICShoppingCart />
        </Badge>
      </>
    );
  };
  return (
    <div className="bg-white shadow-custom-1">
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
          <Actions />
        </div>
      </div>
    </div>
  );
};
