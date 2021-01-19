import { FC } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo, HeaderLayout, MegaMenu } from './dependencies';
import { ICSearch, ICShoppingCart, ICPhoneVolume } from 'icons';
import { Badge } from 'components';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderSeventh: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <div className="ml-8px">ورود/عضویت در سایت</div>
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

  return (
    <HeaderLayout>
      <div className="border-b-2">
        <div
          className={` grid  grid-cols-12 container mx-auto  w-full h-122px `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-6 flex items-center ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={item.images} />
          </div>
          <div className="col-span-5 flex items-center justify-end">
            <Actions />
          </div>
        </div>
      </div>
      <div className="bg-red-600 text-white">
        <div
          className={`grid  grid-cols-12    w-full  min-h-58px container mx-auto `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <MegaMenu />
          </div>
          <div className="col-span-3">
            <Link href="./">
              <a className="h-full flex items-center justify-end">
                <div className="text-16px">09365464683</div>
                <ICPhoneVolume className="mr-4" fill="#fff" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};
