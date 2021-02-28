import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderInput,
  HeaderLayout,
  HeaderButton,
  HeaderCascadingMenu,
  HeaderTel,
  Social,
} from './dependencies';
import { Badge, GeneralLink } from 'components';
import { ICSearch, ICShoppingCart } from 'icons';
import { useClass, useDirection } from 'hooks';
const logo = '/assets/images/logo.png';

const HeaderEighth: FC<IHeader> = ({ item, layout = true, designState }) => {
  const { pageSettings } = designState;
  const { join, toggle } = useClass();
  const { flexDirection, marginLtr, language } = useDirection();
  const { settings } = item;
  const showSocial = settings.social == undefined ? true : settings.social;
  const showTel = settings.tel == undefined ? true : settings.tel;

  const Actions = () => {
    return (
      <div
        className={`sep-header-actions flex ${flexDirection} items-center justify-center`}
      >
        <GeneralLink
          cssClass="sep-header-actions__search-link"
          layout={layout}
          href="./"
        >
          <ICSearch className="mx-4 fill-current" />
        </GeneralLink>

        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
          layout={true}
          cssClass="sep-header-actions__badge"
        >
          <GeneralLink
            href="./"
            layout={layout}
            cssClass="sep-header-actions__shopping-cart-link"
          >
            {' '}
            <ICShoppingCart
              className="fill-current"
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
      cssClass="sep-header--eight"
      id="headerEight"
    >
      <div
        className="sep-header__background"
        style={{
          backgroundColor: `${layout ? `${pageSettings.primary}` : `#fff`}`,
          color: `${layout ? `#fff` : 'initial'}`,
        }}
      >
        <div
          className={` sep-header__row sep-header__row--1 flex ${flexDirection}   w-full h-58px  container mx-auto px-20px`}
        >
          <div
            className={`sep-header__navbar-box ${
              showSocial ? 'w-9/12' : 'w-full'
            }  flex ${flexDirection} items-center `}
          >
            <HeaderNavbar
              direction="horizental"
              toggle={toggle}
              layout={layout}
              className="font-bold text-16px"
            />
          </div>
          {showSocial && (
            <div
              className={`sep-header__social-box w-3/12 flex ${flexDirection} items-center justify-end text-16px `}
              style={{
                color: `${layout ? `#fff` : 'initial'}`,
              }}
            >
              <Social item={item} />
            </div>
          )}
        </div>
      </div>

      <div className="sep-header__border border-b-2 border-t-2">
        <div
          className={`sep-header__row  sep-header__row--2 flex ${flexDirection}  w-full h-122px container mx-auto px-20px `}
        >
          <div
            className={`sep-header__logo-box w-2/12  flex ${flexDirection} items-center`}
          >
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div
            className={`sep-header__input-box w-6/12 flex ${flexDirection} items-center justify-center `}
          >
            <HeaderInput
              className="w-535px text-16px rounded-25px  bg-white_shade-200 border-white_shade-300  px-35px "
              layout={layout}
              toggle={toggle}
            />
          </div>
          <div
            className={`sep-header__actions-box w-4/12 flex ${flexDirection} items-center justify-end `}
          >
            <Actions />
            <HeaderButton
              layout={layout}
              className="  rounded-25px  text-white "
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
              toggle={toggle}
              designState={designState}
            />
          </div>
        </div>
      </div>
      <div
        className={`sep-header__row sep-header__row--3 flex ${flexDirection}  items-center w-full container mx-auto px-20px `}
      >
        <div
          className={`sep-header__cascading-menu-box  ${
            showTel ? 'w-9/12' : 'w-full'
          } flex ${flexDirection} items-center `}
        >
          <HeaderCascadingMenu designState={designState} layout={layout} />
        </div>
        {showTel && (
          <div
            className={`sep-header__tel-box w-3/12 h-full flex ${flexDirection} items-center justify-end `}
          >
            <HeaderTel
              layout={layout}
              className="text-16px font-bold"
              item={item}
              toggle={toggle}
            />
          </div>
        )}
      </div>
    </HeaderLayout>
  );
};

export default HeaderEighth;
