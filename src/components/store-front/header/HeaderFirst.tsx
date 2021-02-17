import { FC, useState } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderLayout,
  HeaderButton,
  HeaderSearch,
} from './dependencies';
import { GeneralLink } from 'components';
import { ICSearch, ICShoppingCart, ICUsersAlt } from 'icons';
import { useClass, useUi, useDirection } from 'hooks';

const HeaderFirst: FC<IHeader> = ({ item, layout = true, designState }) => {
  const [openSearch, setOpenearch] = useState(false);
  const { uiState } = useUi();

  const { container } = uiState;
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr, language } = useDirection();
  const Actions = () => {
    return (
      <div className={`header-actions flex ${flexDirection} w-full `}>
        <HeaderSearch show={openSearch} showHandler={setOpenearch} />

        <GeneralLink
          layout={layout}
          cssClass="header-actions__shopping-cart-link"
          href="/"
        >
          <ICShoppingCart
            height="20px"
            width="20px"
            className="mx-2 fill-current text-20px"
          />{' '}
        </GeneralLink>
        <GeneralLink
          layout={layout}
          cssClass="header-actions__users-alt-link"
          href="/"
        >
          <ICUsersAlt
            height="20px"
            width="20px"
            className={`${marginRtl}-2  fill-current text-20px`}
          />
        </GeneralLink>
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
        {!openSearch && (
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
        )}{' '}
        <div
          className={`header__actions-box ${
            openSearch ? 'w-10/12' : 'w-3/12'
          } flex ${flexDirection}  items-center justify-end `}
        >
          <Actions />

          <HeaderButton
            layout={layout}
            className={`rounded-25px  text-white`}
            text={
              item.settings?.button && item.settings.button?.text
                ? item.settings.button.text
                : `${language.HStoreProducts}`
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
