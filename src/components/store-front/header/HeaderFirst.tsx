import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderLayout,
  HeaderButton,
} from './dependencies';
import { ICSearch, ICShoppingCart, ICUsersAlt } from 'icons';
import { useUi, useClass, useDesign, useDirection } from 'hooks';
import Link from 'next/link';

export const HeaderFirst: FC<IHeader> = ({ item, layout = true }) => {
  const { uiState } = useUi();
  const { container } = uiState;
  const { join, toggle } = useClass();
  const { designState } = useDesign();
  const { flexDirection, marginRtl } = useDirection();
  const Actions = () => {
    return (
      <>
        <Link href="/">
          <a>
            <ICSearch className="mx-2 fill-current" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <ICShoppingCart className="mx-2 fill-current" />{' '}
          </a>
        </Link>
        <Link href="/">
          <a>
            <ICUsersAlt className="mx-2 fill-current" />
          </a>
        </Link>
      </>
    );
  };

  return (
    <HeaderLayout layout={layout} toggle={toggle}>
      <div
        className={`flex ${flexDirection} w-full h-122px container mx-auto ${container.padding}   `}
      >
        <div className={`w-1/5 ${flexDirection} flex items-center `}>
          <HeaderLogo src={item.images} join={join} />
        </div>
        <div
          className={`w-3/5 flex ${flexDirection} items-center ${marginRtl}-6 `}
        >
          <HeaderNavbar direction="horizental" join={join} toggle={toggle} />
        </div>
        <div
          className={`w-1/5 flex ${flexDirection}  items-center justify-end `}
        >
          <Actions />

          <HeaderButton
            layout={true}
            className={` ${marginRtl}-35px  rounded-25px  text-white`}
            text={item?.buttonText ? item.buttonText : 'محصولات فروشگاه'}
            toggle={toggle}
            designState={designState}
          />
        </div>
      </div>
    </HeaderLayout>
  );
};
