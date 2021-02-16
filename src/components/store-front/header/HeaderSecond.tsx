import { FC } from 'react';
import { HeaderNavbar, HeaderLogo, HeaderLayout } from './dependencies';
import { ICSearch, ICShoppingCart } from 'icons';
import { Badge, GeneralLink } from 'components';
import { useClass, useDirection } from 'hooks';
const logo = '/assets/images/logo.png';

const HeaderSecond: FC<IHeader> = ({ item, layout = true, languageText }) => {
  const { join, toggle } = useClass();
  const { flexDirection, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <div className={`header-actions flex ${flexDirection}`}>
        <GeneralLink
          className={`cursor-pointer  ${layout && 'font-bold'} fill-current`}
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
          layout={layout}
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
          cssClass="header-actions__badge"
        >
          <GeneralLink
            cssClass="header-actions__shopping-cart-link"
            layout={layout}
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
      id="headerSecond"
      cssClass="header--second"
    >
      <div
        className={`header__row header__row--1 flex  ${flexDirection} container mx-auto px-20px  w-full h-122px `}
      >
        <div
          className={`header__navbar-box w-6/12 flex ${flexDirection} items-center `}
        >
          <HeaderNavbar
            className="font-bold text-16px"
            layout={layout}
            direction="horizental"
            toggle={toggle}
            languageText={languageText}
          />
        </div>
        <div
          className={`header__logo-box w-2/12  flex ${flexDirection} items-center `}
        >
          <HeaderLogo layout={layout} src={item.images} join={join} />
        </div>
        <div
          className={`header__actions-box w-4/12 flex ${flexDirection} items-center justify-end`}
        >
          <Actions />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default HeaderSecond;
