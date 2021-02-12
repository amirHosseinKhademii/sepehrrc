import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderLayout,
  HeaderCascadingMenu,
} from './dependencies';
import { ICSearch, ICShoppingCart, ICPhoneVolume } from 'icons';
import { useDesign, useClass } from 'hooks';
import { Badge } from 'components';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

const HeaderSeventh: FC<IHeader> = ({ item, layout = true }) => {
  const { designState } = useDesign();
  const { pageSettings } = designState;
  const { join, toggle } = useClass();
  const Actions = () => {
    return (
      <>
        <Link href="./">
          <a>
            <div className="ml-8px cursor-pointer font-bold">
              ورود/عضویت در سایت
            </div>
          </a>
        </Link>
        <Link href="./">
          <a>
            <ICSearch
              height="20px"
              width="20px"
              className="mx-4 fill-current text-20px"
            />
          </a>
        </Link>
        <Badge
          className="text-white h-18px w-18px leading-tight "
          badgeContent="2"
        >
          <Link href="./">
            <a>
              <ICShoppingCart
                height="20px"
                width="20px"
                className="fill-current text-20px "
              />
            </a>
          </Link>
        </Badge>
      </>
    );
  };

  return (
    <HeaderLayout layout={layout} toggle={toggle}>
      <div className="border-b-2">
        <div
          className={` grid  grid-cols-12 container mx-auto  w-full h-122px px-20px `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-6 flex items-center ">
            <HeaderNavbar direction="horizental" join={join} toggle={toggle} />
          </div>
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={item.images} join={join} />
          </div>
          <div className="col-span-5 flex items-center justify-end ">
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
            <HeaderCascadingMenu
              listClassName="text-black"
              designState={designState}
            />
          </div>
          <div className="col-span-3 ">
            <a
              href={`tel:+98${
                item.settings?.tel ? item.settings.tel : '0910000000'
              }`}
              className=" h-full flex items-center justify-end text-16px font-iransans"
            >
              <span>
                {item.settings?.tel ? item.settings.tel : '0910000000'}
              </span>

              <ICPhoneVolume
                height="20px"
                width="20px"
                className="mr-10px text-20px fill-current"
              />
            </a>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default HeaderSeventh;
