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

 const HeaderFirst: FC<IHeader> = ({ item, layout = true }) => {
  const { uiState } = useUi();
  const { container } = uiState;
  const { join, toggle } = useClass();
  const { designState } = useDesign();
  const { flexDirection, marginRtl, marginLtr } = useDirection();
  const Actions = () => {
    return (
      <>
        <Link href="/">
          <a>
            <ICSearch
              height="20px"
              width="20px"
              className="mx-2 fill-current text-20px"
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <ICShoppingCart
              height="20px"
              width="20px"
              className="mx-2 fill-current text-20px"
            />{' '}
          </a>
        </Link>
        <Link href="/">
          <a>
            <ICUsersAlt
              height="20px"
              width="20px"
              className={`mr-2 ${marginLtr}-30px fill-current text-20px`}
            />
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
        <div className={`w-1/12 ${flexDirection} flex items-center `}>
          <HeaderLogo src={item.images} join={join} />
        </div>
        <div
          className={`w-8/12 flex ${flexDirection} items-center ${marginRtl}-60px  `}
        >
          <HeaderNavbar direction="horizental" join={join} toggle={toggle} />
        </div>
        <div
          className={`w-3/12 flex ${flexDirection}  items-center justify-end `}
        >
          <Actions />

          <HeaderButton
            layout={true}
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