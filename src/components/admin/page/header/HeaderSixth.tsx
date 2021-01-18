import { FC } from 'react';
import { IHeader } from './interface';
import {
  Navbar,
  HeaderLogo,
  HeaderButton,
  HeaderInput,
  HeaderLayout,
} from './dependencies';
import {
  ICPhoneVolume,
  ICShoppingCart,
  ICWhatsapp,
  ICTwitter,
  ICTelegram,
  ICInstagram,
} from 'icons';
import { Badge } from 'components';

const logo = '/assets/images/logo.png';

export const HeaderSixth: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <div className="text-16px">09365464683</div>
        <ICPhoneVolume className="mr-4" />
        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root="mr-20px"
        >
          <ICShoppingCart />
        </Badge>
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
    <HeaderLayout>
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
            <Actions />

            <HeaderButton className="mr-25px">ورود یاعضویت</HeaderButton>
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
        <div className="col-span-3 flex items-center justify-end text-24px">
          <Social />
        </div>
      </div>
    </HeaderLayout>
  );
};
