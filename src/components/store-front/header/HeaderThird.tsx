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
import { useClass, useDesign, useDirection } from 'hooks';
const logo = '/assets/images/logo.png';

export const HeaderThird: FC<IHeader> = ({ item, layout = true }) => {
  const { toggle, join } = useClass();
  const { designState } = useDesign();
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <>
        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root={`${marginLtr}-20px`}
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
          className={`w-full  flex ${flexDirection}    h-122px container mx-auto px-20px `}
        >
          <div className={`w-1/12  flex ${flexDirection} items-center `}>
            <HeaderLogo src={item.images} join={join} />
          </div>
          <div
            className={`w-8/12 flex ${flexDirection} items-center justify-center`}
          >
            <HeaderInput
              className="w-535px rounded-25px  bg-white_shade-200 border-white_shade-300 border-2"
              layout={layout}
              toggle={toggle}
            />
          </div>
          <div
            className={`w-4/12 flex  ${flexDirection} items-center justify-end`}
          >
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
        className={` w-full  flex ${flexDirection}  h-58px   container mx-auto px-20px relative`}
      >
        <div className={`w-9/12 flex  ${flexDirection} items-center `}>
          <HeaderMegaMenu designState={designState} />

          <HeaderNavbar direction="horizental" join={join} toggle={toggle} />
        </div>
        <div className={`w-3/12`}>
          <a
            href={`tel:+98${!item.telNumber ? 0 : item.telNumber}`}
            className={` flex ${flexDirection} items-center justify-end text-16px h-full`}
          >
            <span> {!item.telNumber ? '0910000000' : item.telNumber} </span>

            <ICPhoneVolume className={`${marginRtl}-4 fill-current `} />
          </a>
        </div>
      </div>
    </HeaderLayout>
  );
};