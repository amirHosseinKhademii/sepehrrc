import { FC } from 'react';
import { IHeader } from './interface';
import {
  HeaderButton,
  Navbar,
  HeaderLogo,
  HeaderInput,
  HeaderLayout,
} from './dependencies';
import { ICShoppingCart, ICPhoneVolume } from 'icons';

const logo = '/assets/images/logo.png';

export const HeaderThird: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <div className={'relative ml-23px '}>
          <ICShoppingCart />
          <div className="absolute  -right-8px -top-6px  w-18px h-18px bg-red-600 text-white rounded-full">
            <span className="mr-3px">5</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <HeaderLayout>
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
    </HeaderLayout>
  );
};
