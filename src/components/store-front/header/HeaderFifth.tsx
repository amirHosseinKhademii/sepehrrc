import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderCascadingMenu,
  HeaderLayout,
  HeaderButton,
} from './dependencies';
import { ICSearch, ICShoppingCart, ICPhoneVolume } from 'icons';
import { Badge } from 'components';
import { useClass, useDesign } from 'hooks';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderFifth: FC<IHeader> = ({ item, layout = true }) => {
  const { join, toggle } = useClass();
  const { designState } = useDesign();

  const Actions = () => {
    return (
      <>
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
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
        >
          <Link href="./">
            <a>
              <ICShoppingCart
                height="20px"
                width="20px"
                className="fill-current text-20px"
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
          className={` grid  grid-cols-12  w-full h-122px container mx-auto px-20px   `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={item.images} join={join} />
          </div>
          <div className="col-span-7 flex items-center mr-60px ">
            <HeaderNavbar direction="horizental" join={join} toggle={toggle} />
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <Actions />
            <HeaderButton
              layout={layout}
              className=" mr-25px rounded-25px  text-white "
              text={
                item.settings?.button && item.settings.button?.text
                  ? item.settings.button.text
                  : 'ورود/عضویت'
              }
              link={
                item.settings?.button && item.settings.button?.link
                  ? item.settings.button.link
                  : '/signup'
              }
              newTab={
                item.settings?.button && item.settings.button?.newTab
                  ? item.settings.button.newTab
                  : false
              }
              toggle={toggle}
              designState={designState}
            />
          </div>
        </div>
      </div>
      <div
        className={`grid  grid-cols-12   w-full   container mx-auto px-20px`}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <HeaderCascadingMenu designState={designState} />
        </div>
        <div className="col-span-3 ">
          <a
            href={`tel:+98${
              item.settings?.tel ? item.settings.tel : '0910000000'
            }`}
            className="  flex items-center justify-end text-16px mt-20px font-iransans"
          >
            <span>{item.settings?.tel ? item.settings.tel : '0910000000'}</span>
            <ICPhoneVolume
              height="20px"
              width="20px"
              className="mr-10px fill-current text-20px"
            />
          </a>
        </div>
      </div>
    </HeaderLayout>
  );
};
