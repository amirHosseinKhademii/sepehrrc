import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderInput,
  HeaderLayout,
  HeaderMegaMenu,
  HeaderButton,
  Social,
  HeaderTel,
} from './dependencies';
import { ICShoppingCart } from 'icons';
import { Badge } from 'components';
import { useClass, useDirection } from 'hooks';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderFourth: FC<IHeader> = ({
  item,
  layout = true,
  designState,
}) => {
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <>
        <HeaderTel
          layout={layout}
          className="text-16px font-bold"
          item={item}
          toggle={toggle}
        />

        <Badge
          className="text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root="mr-20px"
          layout={layout}
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
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div
            className={`w-7/12 flex ${flexDirection} items-center justify-center `}
          >
            <HeaderInput
              className="text-16px  "
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
              className="  rounded-25px  text-white "
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
        className={`flex ${flexDirection}   w-full h-58px   container mx-auto px-20px relative`}
      >
        <div className={`w-9/12  flex ${flexDirection} items-center  `}>
          <HeaderMegaMenu
            designState={designState}
            toggle={toggle}
            className="font-bold text-16px"
            layout={layout}
          />

          <HeaderNavbar
            direction="horizental"
            toggle={toggle}
            layout={layout}
            className="font-bold text-16px"
          />
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
