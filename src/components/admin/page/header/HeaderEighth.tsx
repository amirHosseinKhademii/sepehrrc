import { FC } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo, HeaderInput, HeaderLayout } from './dependencies';
import { Badge, PureButton } from 'components';
import {
  ICSearch,
  ICShoppingCart,
  ICPhoneVolume,
  ICInstagram,
  ICTelegram,
  ICTwitter,
  ICWhatsapp,
} from 'icons';
import Link from 'next/link';
import { PureInput } from 'components/admin/pure';

const logo = '/assets/images/logo.png';

export const HeaderEighth: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <Link href="./">
          <a>
            <ICSearch className="mx-4" />
          </a>
        </Link>

        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root="mr-4"
        >
          <Link href="./">
            <a>
              <ICShoppingCart />
            </a>
          </Link>
        </Badge>
      </>
    );
  };

  const Social = () => {
    return (
      <>
        <Link href="./">
          <a>
            <ICWhatsapp className="mx-4" fill="#ffffff" />{' '}
          </a>
        </Link>
        <Link href="./">
          <a>
            <ICTwitter className="mx-4" fill="#ffffff" />{' '}
          </a>
        </Link>
        <Link href="./">
          <a>
            <ICInstagram className="mx-4" fill="#ffffff" />{' '}
          </a>
        </Link>
        <Link href="./">
          <a>
            <ICTelegram className="mr-4" fill="#ffffff" />{' '}
          </a>
        </Link>
      </>
    );
  };

  return (
    <HeaderLayout>
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
            <PureButton
              layout={true}
              className="h-50px mr-25px px-8  py-4 text-16px rounded-full bg-red-600 text-white     "
              text="ورود/عضویت"
            />
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
        <div className="col-span-3 ">
          <Link href="./">
            <a className="h-full flex items-center justify-end">
              <div className="text-16px">09365255151</div>
              <ICPhoneVolume className="mr-4" />
            </a>
          </Link>
        </div>
      </div>
    </HeaderLayout>
  );
};
