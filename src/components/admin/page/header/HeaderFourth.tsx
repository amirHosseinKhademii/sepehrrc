import { FC } from 'react';
import { IHeader } from './interface';
import { HeaderButton, Navbar, HeaderLogo, HeaderInput } from './dependencies';
import {
  ICSearch,
  ICShoppingCart,
  ICUsersAlt,
  ICWhatsapp,
  ICTwitter,
  ICTelegram,
  ICInstagram,
} from 'icons';
import { Badge } from 'components';

const logo = '/assets/images/logo.png';

export const HeaderFourth: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <ICSearch className="mx-2" />
        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root="mx-2"
        >
          <ICShoppingCart />
        </Badge>
        <ICUsersAlt className="mx-2" />
      </>
    );
  };

  const Social = () => {
    return (
      <>
        <ICWhatsapp className="mx-4" />
        <ICTwitter className="mx-4" />
        <ICInstagram className="mx-4" />
        <ICTelegram className="mr-4" />
      </>
    );
  };

  return (
    <div className=" bg-white shadow-custom-1">
      <div className="border-b-2">
        <div
          className={`container mx-auto   w-full h-122px grid  grid-cols-12`}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={logo} />
          </div>
          <div className="col-span-7 flex items-center justify-center ">
            <HeaderInput className="w-450px" />
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <Actions />
            <HeaderButton className="mr-35px">{item.Button.text}</HeaderButton>
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
        <div className="col-span-3 flex items-center justify-end text-24px">
          <Social />
        </div>
      </div>
    </div>
  );
};
