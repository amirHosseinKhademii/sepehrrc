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
import Link from 'next/link';

const logo = '/assets/images/logo.png';

const HeaderSixth: FC<IHeader> = ({ item, layout = true, designState }) => {
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  const { join, toggle } = useClass();

  const Actions = () => {
    return (
      <div
        className={`header-actions flex ${flexDirection} items-center justify-center`}
      >
        <HeaderTel
          layout={layout}
          className="text-16px font-bold"
          item={item}
          toggle={toggle}
        />
        <Badge
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root={`mr-20px`}
          layout={layout}
          cssClass="header-actions__badge"
        >
          <Link href="./" passHref>
            <GeneralLink
              layout={layout}
              cssClass="header-actions__shopping-cart-link"
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
      cssClass="header--six"
      id="headerSix"
    >
      <div className="header__border border-b-2">
        <div
          className={`header__row header__row--1 flex ${flexDirection}     w-full h-122px  container mx-auto px-20px`}
        >
          <div
            className={`header__logo-box w-2/12  flex ${flexDirection} items-center justify-start `}
          >
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div
            className={`header__input-box w-6/12 flex ${flexDirection} items-center  justify-center `}
          >
            <HeaderInput
              className="w-535px text-16px rounded-25px  bg-white_shade-200 border-white_shade-300  "
              layout={layout}
              toggle={toggle}
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
        className={`header__row header__row--2 w-full  flex ${flexDirection}  container mx-auto px-20px `}
      >
        <div
          className={`header__cascading-menu-box w-9/12  flex ${flexDirection} items-center `}
        >
          <HeaderCascadingMenu designState={designState} layout={layout} />
        </div>
        <div
          className={`header__socail-box w-3/12 flex ${flexDirection}  justify-end text-16px `}
        >
          <Social />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default HeaderSixth;
