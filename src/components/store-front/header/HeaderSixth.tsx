import { FC } from 'react';
import {
  HeaderLogo,
  HeaderCascadingMenu,
  HeaderInput,
  HeaderLayout,
  HeaderButton,
  Social,
} from './dependencies';
import { ICPhoneVolume, ICShoppingCart } from 'icons';
import { Badge } from 'components';
import { useClass, useDesign } from 'hooks';
import Link from 'next/link';

const logo = '/assets/images/logo.png';

export const HeaderSixth: FC<IHeader> = ({ item, layout = true }) => {
  const { join, toggle } = useClass();
  const { designState } = useDesign();

  const Actions = () => {
    return (
      <>
        <a
          href={`tel:+98${!item.telNumber ? '09000000000' : item.telNumber}`}
          className="flex text-16px font-iransans"
        >
          <span> {!item.telNumber ? '0910000000' : item.telNumber} </span>

          <ICPhoneVolume
            height="20px"
            width="20px"
            className="mr-10px fill-current text-20px"
          />
        </a>

        <Badge
          className=" text-white h-18px w-18px leading-tight "
          badgeContent="6"
          root="mr-20px"
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
          className={` grid  grid-cols-12    w-full h-122px  container mx-auto px-20px`}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center justify-start ">
            <HeaderLogo src={item.images} join={join} />
          </div>
          <div className="col-span-7 flex items-center  justify-center ">
            <HeaderInput
              className="w-535px rounded-25px  bg-white_shade-200 border-white_shade-300 border-2"
              layout={layout}
              toggle={toggle}
            />
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <Actions />
            <HeaderButton
              layout={layout}
              className=" mr-25px rounded-25px  text-white "
              text={item?.buttonText ? item.buttonText : 'ورود/عضویت'}
              toggle={toggle}
              designState={designState}
            />
          </div>
        </div>
      </div>
      <div
        className={`grid  grid-cols-12   w-full   container mx-auto px-20px `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <HeaderCascadingMenu designState={designState} />
        </div>
        <div className="col-span-3 flex  justify-end text-16px mt-20px">
          <Social />
        </div>
      </div>
    </HeaderLayout>
  );
};
