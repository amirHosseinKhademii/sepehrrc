import { FC } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo, HeaderLayout } from './dependencies';
import { ICSearch, ICShoppingCart } from 'icons';
import { Badge } from 'components';
import Link from 'next/link';
const logo = '/assets/images/logo.png';

export const HeaderSecond: FC<IHeader> = ({ item }) => {
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
      <div
        className={` grid  grid-cols-12 container mx-auto p-20px  w-full h-122px `}
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
    </HeaderLayout>
  );
};
