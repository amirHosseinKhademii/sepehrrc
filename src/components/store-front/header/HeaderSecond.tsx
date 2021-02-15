import { FC } from 'react';
import { HeaderNavbar, HeaderLogo, HeaderLayout } from './dependencies';
import { ICSearch, ICShoppingCart } from 'icons';
import { Badge, GeneralLink } from 'components';
import { useClass, useDirection } from 'hooks';
import Link from 'next/link';
import { GeneralInput } from '../common';
const logo = '/assets/images/logo.png';

const HeaderSecond: FC<IHeader> = ({ item, layout = true }) => {
  const { join, toggle } = useClass();
  const { flexDirection, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <div className={`header-actions flex ${flexDirection}`}>
        <Link href="./" passHref>
          <GeneralLink
            className={`cursor-pointer  ${layout && 'font-bold'} fill-current`}
            cssClass="header-actions__sign-link"
            layout={layout}
          >
            ورود/عضویت در سایت
          </GeneralLink>
        </Link>
        <Link href="./" passHref>
          <GeneralLink cssClass="header-actions__search-link" layout={layout}>
            <ICSearch
              height="20px"
              width="20px"
              className="mx-4 fill-current text-20px"
            />
          </GeneralLink>
        </Link>
        <Badge
          layout={layout}
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
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
