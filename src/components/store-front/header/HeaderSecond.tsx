import { FC, useState } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderLayout,
  HeaderSearch,
} from './dependencies';
import { ICSearch, ICShoppingCart } from 'icons';
import { Badge, GeneralLink } from 'components';
import { useClass, useDirection } from 'hooks';
const logo = '/assets/images/logo.png';

const HeaderSecond: FC<IHeader> = ({ item, layout = true }) => {
  const { join, toggle } = useClass();
  const { flexDirection, marginLtr, language } = useDirection();
  const [openSearch, setOpenSearch] = useState(false);

  const Actions = () => {
    return (
      <div
        className={`sep-header-actions flex ${flexDirection} w-full justify-end`}
      >
        {!openSearch && (
          <GeneralLink
            className={`cursor-pointer  ${layout && 'font-bold'} fill-current`}
            cssClass="sep-header-actions__sign-link"
            layout={layout}
            href="./"
          >
            {language.HSign}
            {/* ورود/عضویت در سایت */}
          </GeneralLink>
        )}
        <HeaderSearch show={openSearch} showHandler={setOpenSearch} />

        <Badge
          layout={layout}
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
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
      id="headerSecond"
      cssClass="sep-header--second"
    >
      <div
        className={`sep-header__row sep-header__row--1 flex  ${flexDirection} container mx-auto px-20px  w-full h-122px `}
      >
        <div
          className={`sep-header__navbar-box w-6/12 flex ${flexDirection} items-center `}
        >
          <HeaderNavbar
            className="font-bold text-16px"
            layout={layout}
            direction="horizental"
            toggle={toggle}
          />
        </div>
        <div
          className={`sep-header__logo-box w-2/12  flex ${flexDirection} items-center   ${
            openSearch ? 'opacity-0 pointer-events-none ' : `opacity-100   `
          }`}
        >
          <HeaderLogo layout={layout} src={item.images} join={join} />
        </div>
        <div
          className={`sep-header__actions-box w-4/12 flex ${flexDirection} items-center justify-end`}
        >
          <Actions />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default HeaderSecond;
