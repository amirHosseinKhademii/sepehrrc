import { FC } from 'react';
import { IHeader } from './interface';
import { Navbar, HeaderLogo, HeaderLayout } from './dependencies';
import { ICSearch, ICShoppingCart, ICUsersAlt } from 'icons';
import { HeaderButton } from 'components';
import { useUi } from 'hooks';
import Link from 'next/link';

export const HeaderFirst: FC<IHeader> = ({ item }) => {
  const { uiState } = useUi();
  const { container } = uiState;

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
    <HeaderLayout>
      <div
        className={` grid  grid-cols-12 w-full h-122px container mx-auto ${container.padding}   `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-2  flex items-center ">
          <HeaderLogo src={item.images} />
        </div>
        <div className="col-span-6 flex items-center mr-6 ">
          <Navbar direction="horizental" />
        </div>
        <div className="col-span-4 flex items-center justify-end">
          <Actions />

          <HeaderButton
            className=" mr-35px"
            text={item?.buttonText ? item.buttonText : 'محصولات فروشگاه'}
          />
        </div>
      </div>
    </HeaderLayout>
  );
};
