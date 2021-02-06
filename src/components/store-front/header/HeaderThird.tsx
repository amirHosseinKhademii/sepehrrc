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

export const HeaderThird: FC<IHeader> = ({ item, layout = true }) => {
  const { toggle, join } = useClass();
  const { designState } = useDesign();
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <>
        <Badge
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root={`${marginLtr}-20px`}
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
      <div className="border-2">
        <div
          className={`w-full  flex ${flexDirection}    h-122px container mx-auto px-20px `}
        >
          <div
            className={`w-1/12  flex ${flexDirection} items-center justify-start `}
          >
            <HeaderLogo src={item.images} join={join} />
          </div>
          <div className={`w-8/12 flex  items-center justify-center`}>
            <HeaderInput
              className="w-535px rounded-25px  bg-white_shade-200 border-white_shade-300 border-2"
              layout={layout}
              toggle={toggle}
            />
          </div>
          <div
            className={`w-3/12 flex  ${flexDirection} items-center justify-end`}
          >
            <Actions />
            <HeaderButton
              toggle={toggle}
              layout={layout}
              className="   rounded-25px  text-white"
              text={item.settings?.button ? item.settings.button : 'ورود/عضویت'}
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
            href={`tel:+98${
              item.settings?.tel ? item.settings.tel : '0910000000'
            }`}
            className={` flex ${flexDirection} items-center justify-end text-16px h-full font-iransans`}
          >
            <span>{item.settings?.tel ? item.settings.tel : '0910000000'}</span>

            <ICPhoneVolume
              height="20px"
              width="20px"
              className={`${marginRtl}-10px fill-current text-20px`}
            />
          </a>
        </div>
      </div>
    </HeaderLayout>
  );
};
