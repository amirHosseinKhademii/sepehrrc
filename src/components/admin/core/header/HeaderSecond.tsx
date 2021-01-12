import { FC } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo } from './dependencies';
import { ICSearch, ICShoppingCart } from 'icons';
const logo = '/assets/images/logo.png';

export const HeaderSecond: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <div className="ml-8px">ورود/عضویت در سایت</div>
        <ICSearch className="mx-4" />
        <div className={'relative mr-4 '}>
          <ICShoppingCart />
          <div className="absolute  -right-8px -top-6px  w-18px h-18px bg-red-600 text-white rounded-full">
            <span className="mr-3px">5</span>
          </div>
        </div>
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
