import { FC } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo, HeaderButton, HeaderInput } from './dependencies';
import {
  ICSearch,
  ICShoppingCart,
  ICPhoneVolume,
  ICInstagram,
  ICTelegram,
  ICTwitter,
  ICWhatsapp,
} from 'icons';

const logo = '/assets/images/logo.png';

export const HeaderEighth: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <ICSearch className="mx-4" />
        <div className="relative mr-4 ">
          <ICShoppingCart />
          <div className="absolute  -right-8px -top-6px  w-18px h-18px bg-red-600 text-white rounded-full">
            <span className="mr-3px">5</span>
          </div>
        </div>
      </>
    );
  };

  const Social = () => {
    return (
      <>
        <ICWhatsapp className="mx-4" fill="#ffffff" />
        <ICTwitter className="mx-4" fill="#ffffff" />
        <ICInstagram className="mx-4" fill="#ffffff" />
        <ICTelegram className="mr-4" fill="#ffffff" />
      </>
    );
  };

  return (
    <div className={`bg-white shadow-custom-1`}>
      <div className="bg-gray_shade-700 text-white">
        <div
          className={`grid  grid-cols-12    w-full h-58px  container mx-auto `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-3 flex items-center justify-end text-24px">
            <Social />
          </div>
        </div>
      </div>

      <div className="border-b-2">
        <div
          className={`grid  grid-cols-12   w-full h-122px container mx-auto  `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center">
            <HeaderLogo src={logo} />
          </div>
          <div className="col-span-7 flex items-center justify-center ">
            <HeaderInput className="w-535px" />
          </div>
          <div className="col-span-4 flex items-center justify-end ">
            <Actions />
            <HeaderButton className="mr-25px">ورود/عضویت</HeaderButton>
          </div>
        </div>
      </div>
      <div
        className={`grid  grid-cols-12    w-full h-58px  container mx-auto `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <Navbar direction="horizental" items={item.menuItems} />
        </div>
        <div className="col-span-3 flex items-center justify-end">
          <div className="text-16px">09365255151</div>
          <ICPhoneVolume className="mr-4" />
        </div>
      </div>
    </div>
  );
};