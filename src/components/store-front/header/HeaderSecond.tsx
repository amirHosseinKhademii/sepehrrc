import { FC } from 'react';
import { HeaderNavbar, HeaderLogo, HeaderLayout } from './dependencies';
import { ICSearch, ICShoppingCart } from 'icons';
import { Badge } from 'components';
import { useClass, useDirection } from 'hooks';
import Link from 'next/link';
const logo = '/assets/images/logo.png';

export const HeaderSecond: FC<IHeader> = ({ item, layout = true }) => {
  const { join, toggle } = useClass();
  const { flexDirection, marginLtr } = useDirection();

  const Actions = () => {
    return (
      <>
        <Link href="./">
          <a
            className={`cursor-pointer  ${layout && 'font-bold'} fill-current`}
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
      <div
        className={` flex  ${flexDirection} container mx-auto px-20px  w-full h-122px `}
      >
        <div className={`w-6/12 flex ${flexDirection} items-center `}>
          <HeaderNavbar
            className="font-bold text-16px"
            layout={layout}
            direction="horizental"
            toggle={toggle}
          />
        </div>
        <div className={`w-2/12  flex ${flexDirection} items-center `}>
          <HeaderLogo layout={layout} src={item.images} join={join} />
        </div>
        <div
          className={`w-4/12 flex ${flexDirection} items-center justify-end`}
        >
          <Actions />
        </div>
      </div>
    </HeaderLayout>
  );
};
