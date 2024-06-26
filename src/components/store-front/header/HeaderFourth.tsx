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
import { Badge, GeneralLink } from 'components';
import { useClass, useDirection } from 'hooks';

const logo = '/assets/images/logo.png';

const HeaderFourth: FC<IHeader> = ({ item, layout = true, designState }) => {
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr, language } = useDirection();
  const { settings } = item;
  const showSocial = settings.social == undefined ? true : settings.social;
  const showTel = settings.tel == undefined ? true : settings.tel;

  const Actions = () => {
    return (
      <div
        className={`sep-header-actions flex ${flexDirection} items-center justify-center`}
      >
        {showTel && (
          <HeaderTel
            layout={layout}
            className="text-16px font-bold"
            item={item}
            toggle={toggle}
          />
        )}
        <Badge
          className="text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root={`${marginRtl}-20px`}
          layout={layout}
          cssClass="sep-header-actions__badge"
        >
          <GeneralLink
            cssClass="sep-header-actions__shopping-cart-link"
            layout={layout}
            href="./"
          >
            <ICShoppingCart
              height="20px"
              width="20px"
              className="fill-current text-20px"
              cssClass="sep-header-actions__shopping-cart-ic"
            />
          </GeneralLink>
        </Badge>
      </div>
    );
  };

  return (
    <HeaderLayout
      layout={layout}
      toggle={toggle}
      cssClass="header--fourth"
      id="headerFourth"
    >
      <div className="sep-header__border border-b-2">
        <div
          className={`sep-header__row sep-header__row--1 flex ${flexDirection} w-full h-122px container mx-auto     px-20px `}
        >
          <div
            className={`sep-header__logo-box w-1/12  flex ${flexDirection} items-center `}
          >
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div
            className={`sep-header__input-box w-7/12 flex ${flexDirection} items-center justify-center `}
          >
            <HeaderInput
              className="w-535px text-16px rounded-25px  bg-white_shade-200 border-white_shade-300  px-35px "
              layout={layout}
              toggle={toggle}
            />
          </div>
          <div
            className={`sep-header__actions-box w-4/12 flex ${flexDirection} items-center justify-end`}
          >
            <Actions />
            <HeaderButton
              layout={layout}
              className="  rounded-25px  text-white "
              text={
                item.settings?.button && item.settings.button?.text
                  ? item.settings.button.text
                  : `${language.HSign}`
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
        className={`sep-header__row sep-header__row--1 flex ${flexDirection}   w-full h-58px   container mx-auto px-20px relative`}
      >
        <div
          className={`sep-header__menu-box ${
            showSocial ? 'w-9/12' : 'w-full'
          }  flex ${flexDirection} items-center  `}
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
        {showSocial && (
          <div
            className={`sep-header__social-box w-3/12 flex  ${flexDirection} items-center justify-end text-16px`}
          >
            <Social item={item} />
          </div>
        )}
      </div>
    </HeaderLayout>
  );
};

export default HeaderFourth;
