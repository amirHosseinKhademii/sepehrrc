import { FC, Fragment } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo, MegaMenu, HeaderLayout } from './dependencies';

import { ICSearch, ICShoppingCart, ICPhoneVolume } from 'icons';
import { Badge, HeaderButton } from 'components';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderFifth: FC<IHeader> = ({ item }) => {
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
  return (
    <HeaderLayout>
      <div className="border-b-2">
        <div
          className={` grid  grid-cols-12  w-full h-122px container mx-auto px-20px   `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={item.images} />
          </div>
          <div className="col-span-7 flex items-center mr-6 ">
            <Navbar direction="horizental" />
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <Actions />
            <HeaderButton
              className="mr-25px"
              text={item?.buttonText ? item.buttonText : 'ورود/عضویت'}
            />
          </div>
        </div>
      </div>
      <div
        className={`grid  grid-cols-12   w-full   container mx-auto px-20px`}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <MegaMenu />
        </div>
        <div className="col-span-3 ">
          <a
            href={`tel:+98${!item.telNumber ? 0 : item.telNumber}`}
            className="  flex items-center justify-end text-16px mt-20px"
          >
            <span> {!item.telNumber ? '0910000000' : item.telNumber} </span>
            <ICPhoneVolume className="mr-4" />
          </a>
        </div>
      </div>
    </HeaderLayout>
  );
};
