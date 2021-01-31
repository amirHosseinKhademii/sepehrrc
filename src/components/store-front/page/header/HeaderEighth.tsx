import { FC } from 'react';
import { IHeader } from './interface';
import {
  Navbar,
  HeaderLogo,
  HeaderInput,
  HeaderLayout,
  MegaMenu,
} from './dependencies';
import { Badge, HeaderButton } from 'components';
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
import { useDesign } from 'hooks';
const logo = '/assets/images/logo.png';

export const HeaderEighth: FC<IHeader> = ({ item }) => {
  const { designState } = useDesign();
  const { pageSettings } = designState;

  const Actions = () => {
    return (
      <>
        <Link href="./">
          <a>
            <ICSearch className="mx-4 fill-current" />
          </a>
        </Link>

        <Badge
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
      <div
        className=" text-white"
        style={{ backgroundColor: `${pageSettings.primary}` }}
      >
        <div
          className={`grid  grid-cols-12    w-full h-58px  container mx-auto px-20px`}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <Navbar direction="horizental" />
          </div>
          <div className="col-span-3 flex items-center justify-end text-24px">
            <Social />
          </div>
        </div>
      </div>

      <div className="border-b-2">
        <div
          className={`grid  grid-cols-12   w-full h-122px container mx-auto px-20px `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center">
            <HeaderLogo src={item.images} />
          </div>
          <div className="col-span-7 flex items-center justify-center ">
            <HeaderInput className="w-535px" />
          </div>
          <div className="col-span-4 flex items-center justify-end ">
            <Actions />
            <HeaderButton
              className="mr-25px"
              text={item?.buttonText ? item.buttonText : 'ورود/عضویت'}
            />
          </div>
        </div>
      </div>
      <div
        className={`grid  grid-cols-12    w-full container mx-auto px-20px `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <MegaMenu />
        </div>
        <div className="col-span-3 h-full flex items-center justify-end ">
          <a
            href={`tel:+98${!item.telNumber ? 0 : item.telNumber}`}
            className=" h-full flex items-center justify-end  text-16px"
          >
            <span> {!item.telNumber ? '0910000000' : item.telNumber} </span>
            <ICPhoneVolume className="mr-4 fill-current" />
          </a>
        </div>
      </div>
    </HeaderLayout>
  );
};