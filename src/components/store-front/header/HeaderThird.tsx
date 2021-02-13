import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderInput,
  HeaderLayout,
  HeaderMegaMenu,
  HeaderButton,
  HeaderTel,
} from './dependencies';
import Link from 'next/link';
import { ICShoppingCart } from 'icons';
import { Badge } from 'components';
import { useClass, useDirection } from 'hooks';

const HeaderThird: FC<IHeader> = ({ item, layout = true, designState }) => {
  const { toggle, join } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <>
        <Badge
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
          layout={layout}
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
      <div className="border-2">
        <div
          className={`w-full  flex ${flexDirection}    h-122px container mx-auto px-20px `}
        >
          <div
            className={`w-1/12  flex ${flexDirection} items-center justify-start `}
          >
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div className={`w-8/12 flex  items-center justify-center`}>
            <HeaderInput
              className="text-16px  "
              layout={layout}
              toggle={toggle}
            />
          </div>
          <div
            className={`w-3/12 flex  ${flexDirection} items-center justify-end`}
          >
            <Actions />
            <HeaderButton
              toggle={toggle}
              layout={layout}
              className="   rounded-25px  text-white"
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
              designState={designState}
            />
          </div>
        </div>
      </div>
      <div
        className={` w-full  flex ${flexDirection}  h-58px   container mx-auto px-20px relative`}
      >
        <div className={`w-9/12 flex  ${flexDirection} items-center `}>
          <HeaderMegaMenu
            designState={designState}
            toggle={toggle}
            className="font-bold text-16px"
            layout={layout}
          />

          <HeaderNavbar
            direction="horizental"
            toggle={toggle}
            layout={layout}
            className="font-bold text-16px"
          />
        </div>
        <div className={`w-3/12`}>
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

export default HeaderThird;
