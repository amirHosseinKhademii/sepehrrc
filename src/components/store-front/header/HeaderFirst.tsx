import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderLayout,
  HeaderButton,
} from './dependencies';
import { GeneralLink } from 'components';
import { ICSearch, ICShoppingCart, ICUsersAlt } from 'icons';
import { useClass, useUi, useDirection } from 'hooks';
import Link from 'next/link';

const HeaderFirst: FC<IHeader> = ({ item, layout = true, designState }) => {
  const { uiState } = useUi();
  const { container } = uiState;
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();
  const Actions = () => {
    return (
      <div className={`header-actions flex ${flexDirection}`}>
        <Link href="/" passHref>
          <GeneralLink cssClass="header-actions__search-link" layout={layout}>
            <ICSearch
              height="20px"
              width="20px"
              className="mx-2 fill-current text-20px"
            />
          </GeneralLink>
        </Link>
        <Link href="/" passHref>
          <GeneralLink
            layout={layout}
            cssClass="header-actions__shopping-cart-link"
          >
            <ICShoppingCart
              height="20px"
              width="20px"
              className="mx-2 fill-current text-20px"
            />{' '}
          </GeneralLink>
        </Link>
        <Link href="/" passHref>
          <GeneralLink
            layout={layout}
            cssClass="header-actions__users-alt-link"
          >
            <ICUsersAlt
              height="20px"
              width="20px"
              className={`mr-2  fill-current text-20px`}
            />
          </GeneralLink>
        </Link>
      </div>
    );
  };

  return (
    <HeaderLayout
      layout={layout}
      toggle={toggle}
      id="headerFirst"
      cssClass="header--first"
    >
      <div
        className={`header__row header__row--1 flex ${flexDirection} w-full h-122px container mx-auto ${container.padding}   `}
      >
        <div
          className={`header__logo-box w-2/12 ${flexDirection} flex items-center justify-start`}
        >
          <HeaderLogo src={item.images} layout={layout} join={join} />
        </div>
        <div
          className={`header__navbar-box w-7/12 flex ${flexDirection} items-center ${marginRtl}-60px  `}
        >
          <HeaderNavbar
            className="font-bold text-16px"
            direction="horizental"
            toggle={toggle}
            layout={layout}
          />
        </div>
        <div
          className={`header__actions-box w-3/12 flex ${flexDirection}  items-center justify-end `}
        >
          <Actions />

          <HeaderButton
            layout={layout}
            className={`   rounded-25px  text-white`}
            text={
              item.settings?.button && item.settings.button?.text
                ? item.settings.button.text
                : 'محصولات فروشگاه'
            }
            link={
              item.settings?.button && item.settings.button?.link
                ? item.settings.button.link
                : '/products'
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
    </HeaderLayout>
  );
};

export default HeaderFirst;
