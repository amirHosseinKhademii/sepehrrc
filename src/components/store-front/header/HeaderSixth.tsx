import { FC } from 'react';
import {
  HeaderLogo,
  HeaderCascadingMenu,
  HeaderInput,
  HeaderLayout,
  HeaderButton,
  Social,
  HeaderTel,
} from './dependencies';
import { ICShoppingCart } from 'icons';
import { Badge, GeneralLink } from 'components';
import { useClass, useDirection } from 'hooks';

const logo = '/assets/images/logo.png';

const HeaderSixth: FC<IHeader> = ({ item, layout = true, designState }) => {
  const { flexDirection, marginRtl, marginLtr, language } = useDirection();

  const { join, toggle } = useClass();
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
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root={`${marginRtl}-20px`}
          layout={layout}
          cssClass="sep-header-actions__badge"
        >
          <GeneralLink
            href="./"
            layout={layout}
            cssClass="sep-header-actions__shopping-cart-link"
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
      cssClass="sep-header--six"
      id="headerSix"
    >
      <div className="sep-header__border border-b-2">
        <div
          className={`sep-header__row sep-header__row--1 flex ${flexDirection}     w-full h-122px  container mx-auto px-20px`}
        >
          <div
            className={`sep-header__logo-box w-2/12  flex ${flexDirection} items-center justify-start `}
          >
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div
            className={`sep-header__input-box w-6/12 flex ${flexDirection} items-center  justify-center `}
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
        className={`sep-header__row sep-header__row--2 w-full  flex ${flexDirection}  container mx-auto px-20px `}
      >
        <div
          className={`sep-header__cascading-menu-box ${
            showSocial ? 'w-9/12' : 'w-full'
          }   flex ${flexDirection} items-center `}
        >
          <HeaderCascadingMenu designState={designState} layout={layout} />
        </div>
        {showSocial && (
          <div
            className={`sep-header__socail-box w-3/12 flex ${flexDirection}  justify-end text-16px `}
          >
            <Social item={item} />
          </div>
        )}
      </div>
    </HeaderLayout>
  );
};

export default HeaderSixth;
