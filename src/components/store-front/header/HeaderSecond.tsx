import { FC } from 'react';
import { HeaderNavbar, HeaderLogo, HeaderLayout } from './dependencies';
import { ICSearch, ICShoppingCart } from 'icons';
import { Badge } from 'components';
import { useClass } from 'hooks';
import Link from 'next/link';
const logo = '/assets/images/logo.png';

export const HeaderSecond: FC<IHeader> = ({ item, layout = true }) => {
  const { join, toggle } = useClass();
  const Actions = () => {
    return (
      <>
        <Link href="./">
          <a className="cursor-pointer ml-8px font-bold fill-current">
            ورود/عضویت در سایت
          </a>
        </Link>
        <Link href="./">
          <a>
            <ICSearch className="mx-4 fill-current" />
          </a>
        </Link>
        <Badge
          layout={layout}
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
        >
          <Link href="./">
            <a>
              <ICShoppingCart className="fill-current" />
            </a>
          </Link>
        </Badge>
      </>
    );
  };
  return (
    <HeaderLayout layout={layout} toggle={toggle}>
      <div
        className={` grid  grid-cols-12 container mx-auto px-20px  w-full h-122px `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-6 flex items-center ">
          <HeaderNavbar direction="horizental" join={join} toggle={toggle} />
        </div>
        <div className="col-span-1  flex items-center ">
          <HeaderLogo src={item.images} join={join} />
        </div>
        <div className="col-span-5 flex items-center justify-end">
          <Actions />
        </div>
      </div>
    </HeaderLayout>
  );
};
