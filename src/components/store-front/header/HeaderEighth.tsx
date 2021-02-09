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
import { Badge } from 'components';
import { ICSearch, ICShoppingCart } from 'icons';
import Link from 'next/link';
import { useClass, useDirection } from 'hooks';
const logo = '/assets/images/logo.png';

export const HeaderEighth: FC<IHeader> = ({
  item,
  layout = true,
  designState,
}) => {
  const { pageSettings } = designState;
  const { join, toggle } = useClass();
  const { flexDirection, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <>
        <Link href="./">
          <a>
            <ICSearch className="mx-4 fill-current" />
          </a>
        </Link>

        <Badge
          className="bg-red-600 text-white h-18px w-18px leading-tight "
          badgeContent="6"
          layout={true}
        >
          <Link href="./">
            <a>
              <ICShoppingCart className="fill-current" />
            </a>
          </Link>
        </Badge>
      </>
    );
  };

  return (
    <HeaderLayout layout={layout} toggle={toggle}>
      <div
        style={{
          backgroundColor: `${layout ? `${pageSettings.primary}` : `#fff`}`,
          color: `${layout ? `#fff` : 'initial'}`,
        }}
      >
        <div
          className={`flex ${flexDirection}   w-full h-58px  container mx-auto px-20px`}
        >
          <div className={`w-9/12  flex ${flexDirection} items-center `}>
            <HeaderNavbar
              direction="horizental"
              toggle={toggle}
              layout={layout}
              className="font-bold text-16px"
            />
          </div>
          <div
            className={`w-3/12 flex ${flexDirection} items-center justify-end text-16px `}
            style={{
              color: `${layout ? `#fff` : 'initial'}`,
            }}
          >
            <Social />
          </div>
        </div>
      </div>

      <div className="border-b-2 border-t-2">
        <div
          className={`flex ${flexDirection}  w-full h-122px container mx-auto px-20px `}
        >
          <div className={`w-2/12  flex ${flexDirection} items-center`}>
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div
            className={`w-6/12 flex ${flexDirection} items-center justify-center `}
          >
            <HeaderInput
              className="text-16px "
              layout={layout}
              toggle={toggle}
            />
          </div>
          <div
            className={`w-4/12 flex ${flexDirection} items-center justify-end `}
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
        className={`flex ${flexDirection}  items-center w-full container mx-auto px-20px `}
      >
        <div className={`w-9/12  flex ${flexDirection} items-center `}>
          <HeaderCascadingMenu designState={designState} layout={layout} />
        </div>
        <div
          className={`w-3/12 h-full flex ${flexDirection} items-center justify-end `}
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
