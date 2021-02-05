import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderInput,
  HeaderLayout,
  HeaderMegaMenu,
  HeaderButton,
  Social,
} from './dependencies';
import { ICShoppingCart, ICPhoneVolume } from 'icons';
import { Badge } from 'components';
import { useClass, useDesign, useDirection } from 'hooks';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderFourth: FC<IHeader> = ({ item, layout = true }) => {
  const { join, toggle } = useClass();
  const { designState } = useDesign();
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <>
        <a
          href={`tel:+98${!item.telNumber ? '09100000000' : item.telNumber}`}
          className={`flex ${flexDirection} text-16px font-iransans`}
        >
          <span> {!item.telNumber ? '0910000000' : item.telNumber} </span>

          <ICPhoneVolume
            height="20px"
            width="20px"
            className="mr-10px  text-20px fill-current"
          />
        </a>

        <Badge
          className="text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root="mr-20px"
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
          className={`flex ${flexDirection} w-full h-122px container mx-auto     px-20px `}
        >
          <div className={`w-1/12  flex ${flexDirection} items-center `}>
            <HeaderLogo src={item.images} join={join} />
          </div>
          <div
            className={`w-7/12 flex ${flexDirection} items-center justify-center `}
          >
            <HeaderInput
              className="w-535px rounded-25px  bg-white_shade-200 border-white_shade-300 border-2"
              layout={layout}
              toggle={toggle}
            />
          </div>
          <div
            className={`w-4/12 flex ${flexDirection} items-center justify-end`}
          >
            <Actions />
            <HeaderButton
              layout={layout}
              className=" mr-35px rounded-25px  text-white "
              text={item?.buttonText ? item.buttonText : 'ورود/عضویت'}
              toggle={toggle}
              designState={designState}
            />
          </div>
        </div>
      </div>
      <div
        className={`flex ${flexDirection}   w-full h-58px   container mx-auto px-20px relative`}
      >
        <div className={`w-9/12  flex ${flexDirection} items-center  `}>
          <HeaderMegaMenu designState={designState} />

          <HeaderNavbar direction="horizental" join={join} toggle={toggle} />
        </div>
        <div
          className={`w-3/12 flex  ${flexDirection} items-center justify-end text-16px`}
        >
          <Social />
        </div>
      </div>
    </HeaderLayout>
  );
};
