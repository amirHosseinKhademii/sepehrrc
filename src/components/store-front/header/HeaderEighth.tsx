import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderInput,
  HeaderLayout,
  HeaderButton,
  HeaderCascadingMenu,
  Social,
} from './dependencies';
import { Badge } from 'components';
import { ICSearch, ICShoppingCart, ICPhoneVolume } from 'icons';
import Link from 'next/link';
import { useDesign, useClass } from 'hooks';
const logo = '/assets/images/logo.png';

export const HeaderEighth: FC<IHeader> = ({ item, layout = true }) => {
  const { designState } = useDesign();
  const { pageSettings } = designState;
  const { join, toggle } = useClass();

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

  return (
    <HeaderLayout layout={layout} toggle={toggle}>
      <div
        className=" text-white"
        style={{ backgroundColor: `${pageSettings.primary}` }}
      >
        <div
          className={`grid  grid-cols-12    w-full h-58px  container mx-auto px-20px`}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <HeaderNavbar direction="horizental" join={join} toggle={toggle} />
          </div>
          <div className="col-span-3 flex items-center justify-end text-16px text-white">
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
            <HeaderLogo src={item.images} join={join} />
          </div>
          <div className="col-span-7 flex items-center justify-center ">
            <HeaderInput
              className="w-535px rounded-25px  bg-white_shade-200 border-white_shade-300 border-2"
              layout={layout}
              toggle={toggle}
            />
          </div>
          <div className="col-span-4 flex items-center justify-end ">
            <Actions />
            <HeaderButton
              layout={layout}
              className=" mr-25px rounded-25px  text-white "
              text={item?.buttonText ? item.buttonText : 'ورود/عضویت'}
              toggle={toggle}
              designState={designState}
            />
          </div>
        </div>
      </div>
      <div
        className={`grid  grid-cols-12    w-full container mx-auto px-20px `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <HeaderCascadingMenu designState={designState} />
        </div>
        <div className="col-span-3 h-full flex items-center justify-end ">
          <a
            href={`tel:+98${!item.telNumber ? 0 : item.telNumber}`}
            className=" h-full flex items-center justify-end  text-20px font-iransans"
          >
            <span className="text-16px">
              {!item.telNumber ? '0910000000' : item.telNumber}{' '}
            </span>
            <ICPhoneVolume
              height="20px"
              width="20px"
              className="mr-10px fill-current"
            />
          </a>
        </div>
      </div>
    </HeaderLayout>
  );
};
