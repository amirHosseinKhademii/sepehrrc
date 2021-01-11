import { FC, Fragment } from 'react';
import { IHeader } from './interface';
import {
  Navbar,
  HeaderLogo,
  HeaderActions,
  HeaderButton,
  HeaderInput,
} from './dependencies';
const logo = '/assets/images/logo.png';

export const Header: FC<IHeader> = ({ item }) => {
  const FirstVariation = ({ backgroundColor = 'bg-white', item }) => {
    return (
      <div className={`${backgroundColor} shadow-large-1`}>
        <div
          className={` grid  grid-cols-12 w-full h-122px container mx-auto     `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={logo} />
          </div>
          <div className="col-span-7 flex items-center mr-6 ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <HeaderActions variation="first" tel="0659565878" />
            <HeaderButton className="mr-35px">محصولات فروشگاه</HeaderButton>
          </div>
        </div>
      </div>
    );
  };

  const SecondVariation = ({ backgroundColor = 'bg-white', item }) => {
    return (
      <div className={`${backgroundColor} shadow-large-1 `}>
        <div className="border-b-2">
          <div
            className={` grid  grid-cols-12    w-full h-122px  container mx-auto`}
            style={{ direction: 'rtl' }}
          >
            <div className="col-span-1  flex items-center justify-start ">
              <HeaderLogo src={logo} />
            </div>
            <div className="col-span-7 flex items-center  justify-center ">
              <HeaderInput className="w-450px" />
            </div>
            <div className="col-span-4 flex items-center justify-end">
              <HeaderActions variation="second" tel="0659565878" />
              <HeaderButton>ورود یاعضویت</HeaderButton>
            </div>
          </div>
        </div>
        <div
          className={`grid  grid-cols-12   w-full h-58px  container mx-auto `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-3 flex items-center justify-end">
            <HeaderActions variation="social" />
          </div>
        </div>
      </div>
    );
  };

  const ThirdVariation = ({ backgroundColor = 'bg-white', item }) => {
    return (
      <div className={`${backgroundColor} shadow-large-1`}>
        <div className="border-b-2">
          <div
            className={`container mx-auto   w-full h-122px grid  grid-cols-12`}
            style={{ direction: 'rtl' }}
          >
            <div className="col-span-1  flex items-center ">
              <HeaderLogo src={logo} />
            </div>
            <div className="col-span-7 flex items-center justify-center ">
              <HeaderInput className="w-450px" />
            </div>
            <div className="col-span-4 flex items-center justify-end">
              <HeaderActions variation="first" />
              <HeaderButton className="mr-35px">
                {item.Button.text}
              </HeaderButton>
            </div>
          </div>
        </div>
        <div
          className={`grid  grid-cols-12   w-full h-58px   container mx-auto `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-3 flex items-center justify-end">
            <HeaderActions variation="social" />
          </div>
        </div>
      </div>
    );
  };

  const FourthVariation = ({ backgroundColor = 'bg-white', item }) => {
    return (
      <div className={`${backgroundColor} shadow-large-1`}>
        <div
          className={` grid  grid-cols-12 container mx-auto  w-full h-122px `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-6 flex items-center ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-1  flex items-center ">
            <HeaderLogo src={logo} />
          </div>
          <div className="col-span-5 flex items-center justify-end">
            <HeaderActions variation="third" />
          </div>
        </div>
      </div>
    );
  };

  const FifthVariation = ({ backgroundColor = 'bg-white', item }) => {
    return (
      <div className={`${backgroundColor} shadow-large-1`}>
        <div className="border-b-2">
          <div
            className={` grid  grid-cols-12  w-full h-122px container mx-auto   `}
            style={{ direction: 'rtl' }}
          >
            <div className="col-span-1  flex items-center ">
              <HeaderLogo src={logo} />
            </div>
            <div className="col-span-7 flex items-center mr-6 ">
              <Navbar direction="horizental" items={item.menuItems} />
            </div>
            <div className="col-span-4 flex items-center justify-end">
              <HeaderActions variation="fourth" />
              <HeaderButton>ورود/عضویت</HeaderButton>
            </div>
          </div>
        </div>
        <div
          className={`grid  grid-cols-12   w-full h-58px   container mx-auto `}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-3 flex items-center justify-end">
            <HeaderActions variation="Tel" tel="065956298" />
          </div>
        </div>
      </div>
    );
  };

  const SixthVariation = ({ backgroundColor = 'bg-white', item }) => {
    return (
      <div className={`${backgroundColor} shadow-large-1`}>
        <div className="border-2">
          <div
            className={` grid  grid-cols-12   w-full h-122px container mx-auto `}
            style={{ direction: 'rtl' }}
          >
            <div className="col-span-1  flex items-center ">
              <HeaderLogo src={logo} />
            </div>
            <div className="col-span-7 flex items-center justify-center">
              <HeaderInput className="w-535px" />
            </div>
            <div className="col-span-4 flex items-center justify-end">
              <HeaderActions variation="fifth" />
              <HeaderButton>ورود/عضویت</HeaderButton>
            </div>
          </div>
        </div>
        <div
          className={` grid  grid-cols-12    w-full h-58px   container mx-auto`}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-3 flex items-center justify-end">
            <HeaderActions variation="Tel" tel="09365689556" />
          </div>
        </div>
      </div>
    );
  };

  const SeventhVariation = ({ backgroundColor = 'bg-white', item }) => {
    return (
      <div className={`${backgroundColor} shadow-large-1`}>
        <div className="border-b-2">
          <div
            className={`grid  grid-cols-12   w-full h-122px container mx-auto  `}
            style={{ direction: 'rtl' }}
          >
            <div className="col-span-6 flex items-center ">
              <Navbar direction="horizental" items={item.menuItems} />
            </div>
            <div className="col-span-1  flex items-center ">
              <HeaderLogo src={logo} />
            </div>
            <div className="col-span-5 flex items-center justify-end">
              <HeaderActions variation="third" />
            </div>
          </div>
        </div>
        <div
          className={`grid  grid-cols-12    w-full h-58px  container mx-auto`}
          style={{ direction: 'rtl' }}
        >
          <div className="col-span-9  flex items-center ">
            <Navbar direction="horizental" items={item.menuItems} />
          </div>
          <div className="col-span-3 flex items-center justify-end">
            <HeaderActions variation="social" />
          </div>
        </div>
      </div>
    );
  };
  const EightsVariation = ({ backgroundColor = 'bg-white', item }) => {
    return (
      <div className={`${backgroundColor} shadow-large-1`}>
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
              <HeaderActions variation="third" />
            </div>
          </div>
        </div>
        <div className="bg-red-600 text-white">
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
      </div>
    );
  };
  const NinthVariation = ({ backgroundColor = 'bg-white', item }) => {
    return (
      <div className={`${backgroundColor} shadow-large-1`}>
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

  return <Fragment></Fragment>;
};