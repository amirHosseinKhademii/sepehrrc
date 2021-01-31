import { FC } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo, HeaderLayout, MegaMenu } from './dependencies';
import { ICSearch, ICShoppingCart, ICPhoneVolume } from 'icons';
import { useDesign } from 'hooks';
import { Badge } from 'components';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderSeventh: FC<IHeader> = ({ item }) => {
  const { designState } = useDesign();
  const { pageSettings } = designState;

  const Actions = () => {
    return (
      <>
        <Link href="./">
          <a>
            <div className="ml-8px cursor-pointer">ورود/عضویت در سایت</div>
          </a>
        </Link>
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

  return (
    <HeaderLayout>
      <div className="border-b-2">
        <div
          className={` grid  grid-cols-12 container mx-auto  w-full h-122px px-20px `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-6 flex items-center ">
            <Navbar direction="horizental" />
          </div>
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={item.images} />
          </div>
          <div className="col-span-5 flex items-center justify-end">
            <Actions />
          </div>
        </div>
      </div>
      <div
        className=" text-white "
        style={{ backgroundColor: `${pageSettings.primary}` }}
      >
        <div
          className={`grid  grid-cols-12    w-full container mx-auto  px-20px `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <MegaMenu listClassName="text-black" />
          </div>
          <div className="col-span-3 ">
            <a
              href={`tel:+98${!item.telNumber ? 0 : item.telNumber}`}
              className=" h-full flex items-center justify-end text-16px"
            >
              <span> {!item.telNumber ? '0910000000' : item.telNumber} </span>

              <ICPhoneVolume className="mr-4 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};