import { FC } from 'react';
import { IHeader } from './interface';
import {
  Navbar,
  HeaderLogo,
  HeaderActions,
  HeaderButton,
  HeaderInput,
} from './dependencies';
const logo = '/assets/images/logo.png';

export const HeaderEighth: FC<IHeader> = ({ item }) => {
  return (
    <div className={`bg-white shadow-large-1`}>
      <div className="bg-gray_shade-700 text-white">
        <div
          className={`grid  grid-cols-12    w-full h-58px  container mx-auto `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-3 flex items-center justify-end">
            <HeaderActions
              variation="Tel"
              iconColor="#fff"
              tel="03152895885"
              className="text-white"
            />
          </div>
        </div>
      </div>

      <div className="border-b-2">
        <div
          className={`grid  grid-cols-12   w-full h-122px container mx-auto  `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center">
            <HeaderLogo src={logo} />
          </div>
          <div className="col-span-7 flex items-center justify-center ">
            <HeaderInput className="w-535px" />
          </div>
          <div className="col-span-4 flex items-center justify-end ">
            <HeaderActions variation="fourth" className="ml-4" />
            <HeaderButton>ورود/عضویت</HeaderButton>
          </div>
        </div>
      </div>
      <div
        className={`grid  grid-cols-12    w-full h-58px  container mx-auto `}
        style={{ direction: 'rtl' }}
      >
        <div className="col-span-9  flex items-center ">
          <Navbar direction="horizental" items={item.menuItems} />
        </div>
        <div className="col-span-3 flex items-center justify-end">
          <HeaderActions variation="Tel" tel="03152895885" />
        </div>
      </div>
    </div>
  );
};
