import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderInput,
  HeaderLayout,
  HeaderMegaMenu,
  HeaderButton,
} from './dependencies';
import Link from 'next/link';
import { ICShoppingCart, ICPhoneVolume } from 'icons';
import { Badge } from 'components';
import { useClass, useDesign } from 'hooks';
const logo = '/assets/images/logo.png';

export const HeaderThird: FC<IHeader> = ({ item, layout = true }) => {
  const { toggle, join } = useClass();
  const { designState } = useDesign();

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
              <ICShoppingCart className="fill-current" />
            </a>
          </Link>
        </Badge>
      </>
    );
  };
  return (
    <HeaderLayout layout={layout} toggle={toggle}>
      <div className="border-2">
        <div
          className={` grid  grid-cols-12   w-full h-122px container mx-auto px-20px `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={item.images} join={join} />
          </div>
          <div className="col-span-7 flex items-center justify-center">
            <HeaderInput
              className="w-535px rounded-25px  bg-white_shade-200 border-white_shade-300 border-2"
              layout={layout}
              toggle={toggle}
            />
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <Actions />
            <HeaderButton
              toggle={toggle}
              layout={layout}
              className="   rounded-25px  text-white"
              text={item?.buttonText ? item.buttonText : 'ورود/عضویت'}
              designState={designState}
            />
          </div>
        </div>
      </div>
      <div
        className={` grid  grid-cols-12    w-full h-58px   container mx-auto px-20px relative`}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <HeaderMegaMenu />

          <HeaderNavbar direction="horizental" join={join} toggle={toggle} />
        </div>
        <div className="col-span-3 ">
          <a
            href={`tel:+98${!item.telNumber ? 0 : item.telNumber}`}
            className="text-16px h-full flex items-center justify-end"
          >
            <span> {!item.telNumber ? '0910000000' : item.telNumber} </span>

            <ICPhoneVolume className="mr-4 fill-current " />
          </a>
        </div>
      </div>
    </HeaderLayout>
  );
};
