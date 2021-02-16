import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderCascadingMenu,
  HeaderLayout,
  HeaderButton,
  HeaderTel,
} from './dependencies';
import { ICSearch, ICShoppingCart } from 'icons';
import { Badge, GeneralLink } from 'components';
import { useClass, useDirection } from 'hooks';

const logo = '/assets/images/logo.png';

const HeaderFifth: FC<IHeader> = ({
  item,
  layout = true,
  designState,
  languageText,
}) => {
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <div
        className={`header-actions flex ${flexDirection} items-center justify-center`}
      >
        <GeneralLink
          cssClass="header-actions__search-link"
          layout={layout}
          href="./"
        >
          <ICSearch
            height="20px"
            width="20px"
            className="mx-4 fill-current text-20px"
          />
        </GeneralLink>
        <Badge
          layout={layout}
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
          cssClass="header-actions__badge"
        >
          <GeneralLink
            layout={layout}
            cssClass="header-actions__shopping-cart-link"
            href="./"
          >
            <ICShoppingCart
              height="20px"
              width="20px"
              className="fill-current text-20px"
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
      id="headerFifth"
      cssClass="header--fifth"
    >
      <div className="header__border border-b-2">
        <div
          className={`header__row header__row--1 flex ${flexDirection}  w-full h-122px container mx-auto px-20px   `}
        >
          <div
            className={`header__logo-box w-2/12  flex ${flexDirection} items-center `}
          >
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div
            className={` header__navbar-box w-6/12 flex ${flexDirection} items-center ${marginRtl}-60px `}
          >
            <HeaderNavbar
              direction="horizental"
              toggle={toggle}
              layout={layout}
              className="font-bold text-16px"
              languageText={languageText}
            />
          </div>
          <div
            className={`header__actions-box w-4/12 flex ${flexDirection} items-center justify-end`}
          >
            <Actions />
            <HeaderButton
              layout={layout}
              className="  rounded-25px  text-white "
              text={
                item.settings?.button && item.settings.button?.text
                  ? item.settings.button.text
                  : `${languageText.HSign}`
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
        className={`header__row header__row--2 flex ${flexDirection}  w-full   container mx-auto px-20px`}
      >
        <div
          className={`header__cascading-menu-box w-9/12 flex ${flexDirection}  items-center `}
        >
          <HeaderCascadingMenu designState={designState} layout={layout} />
        </div>
        <div
          className={`header__tel-box w-3/12  flex ${flexDirection}  justify-end`}
        >
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

export default HeaderFifth;
