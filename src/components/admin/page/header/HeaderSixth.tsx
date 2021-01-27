import { FC } from 'react';
import { IHeader } from './interface';
import {
  Navbar,
  HeaderLogo,
  MegaMenu,
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
import { Badge, HeaderButton } from 'components';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderSixth: FC<IHeader> = ({ item }) => {
  const Actions = () => {
    return (
      <>
        <a
          href={`tel:+98${!item.telNumber ? '09000000000' : item.telNumber}`}
          className="flex text-16px"
        >
          <span> {!item.telNumber ? '0910000000' : item.telNumber} </span>

          <ICPhoneVolume className="mr-4 fill-current" />
        </a>

        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root="mr-20px"
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

  const Social = () => {
    return (
      <>
        <Link href="./">
          <a>
            <ICWhatsapp className="mx-4  fill-current" />{' '}
          </a>
        </Link>
        <Link href="./">
          <a>
            <ICTwitter className="mx-4 fill-current" />{' '}
          </a>
        </Link>
        <Link href="./">
          <a>
            <ICInstagram className="mx-4 fill-current" />{' '}
          </a>
        </Link>
        <Link href="./">
          <a>
            <ICTelegram className="mr-4 fill-current" />{' '}
          </a>
        </Link>
      </>
    );
  };

  return (
    <HeaderLayout>
      <div className="border-b-2">
        <div
          className={` grid  grid-cols-12    w-full h-122px  container mx-auto px-20px`}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center justify-start ">
            <HeaderLogo src={item.images} />
          </div>
          <div className="col-span-7 flex items-center  justify-center ">
            <HeaderInput className="w-450px" />
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
        className={`grid  grid-cols-12   w-full   container mx-auto px-20px `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <MegaMenu />
        </div>
        <div className="col-span-3 flex  justify-end text-24px mt-20px">
          <Social />
        </div>
      </div>
    </HeaderLayout>
  );
};
