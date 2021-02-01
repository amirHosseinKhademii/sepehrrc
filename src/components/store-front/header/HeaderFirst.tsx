import { FC } from 'react';
import {
  HeaderNavbar,
  HeaderLogo,
  HeaderLayout,
  HeaderButton,
} from './dependencies';
import { ICSearch, ICShoppingCart, ICUsersAlt } from 'icons';
import { useUi, useClass, useDesign } from 'hooks';
import Link from 'next/link';

export const HeaderFirst: FC<IHeader> = ({ item, layout = true }) => {
  const { uiState } = useUi();
  const { container } = uiState;
  const { join, toggle } = useClass();
  const { designState } = useDesign();

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
        className={` grid grid-cols-12 w-full h-122px container mx-auto ${container.padding}   `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-2  flex items-center ">
          <HeaderLogo src={item.images} join={join} />
        </div>
        <div className="col-span-6 flex items-center mr-6 ">
          <HeaderNavbar direction="horizental" join={join} toggle={toggle} />
        </div>
        <div className="col-span-4 flex items-center justify-end">
          <Actions />

          <HeaderButton
            layout={true}
            className=" mr-35px  rounded-25px  text-white"
            text={item?.buttonText ? item.buttonText : 'محصولات فروشگاه'}
            toggle={toggle}
            designState={designState}
          />
        </div>
      </div>
    </HeaderLayout>
  );
};
