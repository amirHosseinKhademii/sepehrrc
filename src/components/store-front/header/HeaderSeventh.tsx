import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderLayout,
  HeaderCascadingMenu,
  HeaderTel,
} from './dependencies';
import { ICSearch, ICShoppingCart } from 'icons';
import { useClass, useDirection } from 'hooks';
import { Badge } from 'components';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderSeventh: FC<IHeader> = ({
  item,
  layout = true,
  designState,
}) => {
  const { pageSettings } = designState;
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <>
        <Link href="./">
          <a
            className={`cursor-pointerml-8px  ${
              layout && 'font-bold'
            } fill-current`}
          >
            ورود/عضویت در سایت
          </a>
        </Link>
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
          className="text-white h-18px w-18px leading-tight "
          badgeContent="2"
          layout={layout}
        >
          <Link href="./">
            <a>
              <ICShoppingCart
                height="20px"
                width="20px"
                className="fill-current text-20px "
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
          className={` flex ${flexDirection} container mx-auto  w-full h-122px px-20px `}
        >
          <div className={`w-6/12 flex ${flexDirection} items-center `}>
            <HeaderNavbar
              direction="horizental"
              toggle={toggle}
              layout={layout}
              className="font-bold text-16px"
            />
          </div>
          <div
            className={`w-2/12  flex ${flexDirection} items-center justify-start `}
          >
            <HeaderLogo src={item.images} join={join} layout={layout} />
          </div>
          <div
            className={`w-4/12 flex ${flexDirection} items-center justify-end`}
          >
            <Actions />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: `${layout ? `${pageSettings.primary}` : `#fff`}`,
          color: `${layout ? `#fff` : 'initial'}`,
        }}
      >
        <div
          className={`flex ${flexDirection}   w-full container mx-auto  px-20px `}
        >
          <div className={`w-9/12 ${flexDirection} flex items-center `}>
            <HeaderCascadingMenu
              listClassName="text-black"
              designState={designState}
              layout={layout}
            />
          </div>
          <div className={`w-9/12   flex  ${flexDirection} justify-end `}>
            <HeaderTel
              layout={layout}
              className="text-16px font-bold"
              item={item}
              toggle={toggle}
            />
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};
