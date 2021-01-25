import { FC } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo, HeaderInput, HeaderLayout } from './dependencies';
import {
  ICSearch,
  ICShoppingCart,
  ICUsersAlt,
  ICWhatsapp,
  ICTwitter,
  ICTelegram,
  ICInstagram,
} from 'icons';
import { Badge, HeaderButton } from 'components';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderFourth: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <Link href="./">
          <a>
            <ICSearch className="mx-2" />
          </a>
        </Link>
        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root="mx-2"
        >
          <Link href="./">
            <a>
              <ICShoppingCart />
            </a>
          </Link>
        </Badge>
        <Link href="./">
          <a>
            <ICUsersAlt className="mx-2" />
          </a>
        </Link>
      </>
    );
  };

  const Social = () => {
    return (
      <>
        <Link href="./">
          <a>
            <ICWhatsapp className="mx-4" />{' '}
          </a>
        </Link>
        <Link href="./">
          <a>
            <ICTwitter className="mx-4" />{' '}
          </a>
        </Link>
        <Link href="./">
          <a>
            <ICInstagram className="mx-4" />{' '}
          </a>
        </Link>
        <Link href="./">
          <a>
            <ICTelegram className="mr-4" />{' '}
          </a>
        </Link>
      </>
    );
  };

  return (
    <HeaderLayout>
      <div className="border-b-2">
        <div
          className={`grid  grid-cols-12 w-full h-122px container mx-auto     px-20px `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={item.images} />
          </div>
          <div className="col-span-7 flex items-center justify-center ">
            <HeaderInput className="w-450px" />
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <Actions />
            <HeaderButton
              className=" mr-35px  "
              text={item?.buttonText ? item.buttonText : 'ورود/عضویت'}
            />
          </div>
        </div>
      </div>
      <div
        className={`grid  grid-cols-12   w-full h-58px   container mx-auto px-20px`}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <Navbar direction="horizental" />
        </div>
        <div className="col-span-3 flex items-center justify-end text-24px">
          <Social />
        </div>
      </div>
    </HeaderLayout>
  );
};
