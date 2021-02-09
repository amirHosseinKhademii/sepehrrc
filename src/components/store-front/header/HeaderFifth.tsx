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
import { Badge } from 'components';
import { useClass, useDirection } from 'hooks';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderFifth: FC<IHeader> = ({
  item,
  layout = true,
  designState,
}) => {
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <>
        <Link href="./">
          <a>
            <ICSearch
              height="20px"
              width="20px"
              className="mx-4 fill-current text-20px"
            />
          </a>
        </Link>
        <Badge
          layout={layout}
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
        >
          <Link href="./">
            <a>
              <ICShoppingCart
                height="20px"
                width="20px"
                className="fill-current text-20px"
              />
            </a>
          </Link>
        </Badge>
      </>
    );
  };
  return (
    <HeaderLayout layout={layout} toggle={toggle}>
      <div className="border-b-2">
        <div
          className={` flex ${flexDirection}  w-full h-122px container mx-auto px-20px   `}
        >
          <div className={`w-2/12  flex ${flexDirection} items-center `}>
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div className={`w-6/12 flex ${flexDirection} items-center mr-60px `}>
            <HeaderNavbar
              direction="horizental"
              toggle={toggle}
              layout={layout}
              className="font-bold text-16px"
            />
          </div>
          <div
            className={`w-4/12 flex ${flexDirection} items-center justify-end`}
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
        className={`flex ${flexDirection}  w-full   container mx-auto px-20px`}
      >
        <div className={`w-9/12 flex ${flexDirection}  items-center `}>
          <HeaderCascadingMenu designState={designState} layout={layout} />
        </div>
        <div className={`w-3/12  flex ${flexDirection}  justify-end`}>
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
