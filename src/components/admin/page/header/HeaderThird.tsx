import { FC } from 'react';
import { IHeader } from './interface';
import { HeaderButton, Navbar, HeaderLogo, HeaderInput } from './dependencies';
import { ICShoppingCart, ICPhoneVolume } from 'icons';
import { Badge } from 'components';

const logo = '/assets/images/logo.png';

export const HeaderThird: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root="ml-20px"
        >
          <ICShoppingCart />
        </Badge>
      </>
    );
  };
  return (
    <div className="bg-white shadow-custom-1">
      <div className="border-2">
        <div
          className={` grid  grid-cols-12   w-full h-122px container mx-auto `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={logo} />
          </div>
          <div className="col-span-7 flex items-center justify-center">
            <HeaderInput className="w-535px" />
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <Actions />
            <HeaderButton>ورود/عضویت</HeaderButton>
          </div>
        </div>
      </div>
      <div
        className={` grid  grid-cols-12    w-full h-58px   container mx-auto`}
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
