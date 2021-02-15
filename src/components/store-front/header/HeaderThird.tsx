import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderInput,
  HeaderLayout,
  HeaderMegaMenu,
  HeaderButton,
  HeaderTel,
} from './dependencies';
import Link from 'next/link';
import { ICShoppingCart } from 'icons';
import { Badge, GeneralLink } from 'components';
import { useClass, useDirection } from 'hooks';

const HeaderThird: FC<IHeader> = ({ item, layout = true, designState }) => {
  const { toggle, join } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <div className={`header-actions flex ${flexDirection}`}>
        <Badge
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
          layout={layout}
          cssClass="header-actions__badge"
        >
          <Link href="./" passHref>
            <GeneralLink
              cssClass="header-actions__shopping-cart-link"
              layout={layout}
            >
              <ICShoppingCart
                height="20px"
                width="20px"
                className="fill-current text-20px"
              />
            </GeneralLink>
          </Link>
        </Badge>
      </div>
    );
  };
  return (
    <HeaderLayout
      layout={layout}
      toggle={toggle}
      id="headerThird"
      cssClass="header--third"
    >
      <div className="header__border header__border--1 border-2">
        <div
          className={`header__row header__row-1 w-full  flex ${flexDirection}    h-122px container mx-auto px-20px `}
        >
          <div
            className={`header__logo-box w-1/12  flex ${flexDirection} items-center justify-start `}
          >
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div
            className={`header__input-box w-8/12 flex  items-center justify-center`}
          >
            <HeaderInput
              className="w-535px text-16px rounded-25px  bg-white_shade-200 border-white_shade-300  "
              layout={layout}
              toggle={toggle}
            />
          </div>
          <div
            className={`header__actions-box w-3/12 flex  ${flexDirection} items-center justify-end`}
          >
            <Actions />
            <HeaderButton
              toggle={toggle}
              layout={layout}
              className="   rounded-25px  text-white"
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
              designState={designState}
            />
          </div>
        </div>
      </div>
      <div
        className={`header__row header__row--2 w-full  flex ${flexDirection}  h-58px   container mx-auto px-20px relative`}
      >
        <div
          className={`header__menu-box w-9/12 flex  ${flexDirection} items-center `}
        >
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
        <div className={`header__tel-box w-3/12`}>
          <HeaderTel
            layout={layout}
            className="text-16px font-bold"
            item={item}
            toggle={toggle}
          />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default HeaderThird;
