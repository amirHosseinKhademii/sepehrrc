import { FC } from 'react';
import { IHeader } from './interface';
import {
  Navbar,
  HeaderLogo,
  HeaderInput,
  HeaderLayout,
  HeaderCategory,
} from './dependencies';
import Link from 'next/link';
import { ICShoppingCart, ICPhoneVolume } from 'icons';
import { Badge, HeaderButton } from 'components';

const logo = '/assets/images/logo.png';

export const HeaderThird: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root="ml-20px"
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
      <div className="border-2">
        <div
          className={` grid  grid-cols-12   w-full h-122px container mx-auto px-20px `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={item.images} />
          </div>
          <div className="col-span-7 flex items-center justify-center">
            <HeaderInput className="w-535px" />
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <Actions />
            <HeaderButton
              text={item?.buttonText ? item.buttonText : 'ورود/عضویت'}
            />
          </div>
        </div>
      </div>
      <div
        className={` grid  grid-cols-12    w-full h-58px   container mx-auto px-20px`}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <HeaderCategory />

          <Navbar direction="horizental" />
        </div>
        <div className="col-span-3 ">
          <a
            href={`tel:+98${!item.telNumber ? 0 : item.telNumber}`}
            className="text-16px h-full flex items-center justify-end"
          >
            <span> {!item.telNumber ? '0910000000' : item.telNumber} </span>

            <ICPhoneVolume className="mr-4" />
          </a>
        </div>
      </div>
    </HeaderLayout>
  );
};
