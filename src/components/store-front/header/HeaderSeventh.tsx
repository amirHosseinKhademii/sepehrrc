import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderLayout,
  HeaderCascadingMenu,
  HeaderTel,
} from './dependencies';
import { ICSearch, ICShoppingCart } from 'icons';
import { useClass, useDirection } from 'hooks';
import { Badge, GeneralLink } from 'components';

const logo = '/assets/images/logo.png';

const HeaderSeventh: FC<IHeader> = ({
  item,
  layout = true,
  designState,
  languageText,
}) => {
  const { pageSettings } = designState;
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <div
        className={`header-actions flex ${flexDirection} items-center justify-center`}
      >
        <GeneralLink
          className={`cursor-pointer ${marginLtr}-8px  ${
            layout && 'font-bold'
          } fill-current`}
          cssClass="header-actions__sign-link"
          layout={layout}
          href="./"
        >
          {languageText.HSign}

          {/* ورود/عضویت در سایت */}
        </GeneralLink>
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
          className="text-white h-18px w-18px leading-tight "
          badgeContent="2"
          layout={layout}
          cssClass="header-actions__badge"
        >
          <GeneralLink
            href="./"
            layout={layout}
            cssClass="header-actions__shopping-cart-link"
          >
            <ICShoppingCart
              height="20px"
              width="20px"
              className="fill-current text-20px "
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
      cssClass="header--seven"
      id={'headerSeven'}
    >
      <div className="header__border border-b-2">
        <div
          className={`header__row header__row--1 flex ${flexDirection} container mx-auto  w-full h-122px px-20px `}
        >
          <div
            className={`header__navbar-box w-6/12 flex ${flexDirection} items-center `}
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
            className={`header__logo-box w-2/12  flex ${flexDirection} items-center justify-start `}
          >
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div
            className={`heaer__actions-box w-4/12 flex ${flexDirection} items-center justify-end`}
          >
            <Actions />
          </div>
        </div>
      </div>
      <div
        className="header__background"
        style={{
          backgroundColor: `${layout ? `${pageSettings.primary}` : `#fff`}`,
          color: `${layout ? `#fff` : 'initial'}`,
        }}
      >
        <div
          className={`header__row header__row--2 flex ${flexDirection}   w-full container mx-auto  px-20px `}
        >
          <div
            className={`header__cascading-menu-box w-9/12 ${flexDirection} flex items-center `}
          >
            <HeaderCascadingMenu
              listClassName="text-black"
              designState={designState}
              layout={layout}
            />
          </div>
          <div
            className={`header__tel-box w-9/12   flex  ${flexDirection} justify-end `}
          >
            <HeaderTel
              layout={layout}
              className="text-16px font-bold"
              item={item}
              toggle={toggle}
            />
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default HeaderSeventh;
