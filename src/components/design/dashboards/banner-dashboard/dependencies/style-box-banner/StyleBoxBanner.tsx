import { useClass, useDesign, useDirection } from 'hooks';
import { FC, Fragment, useState } from 'react';
import { ICEditStyle } from 'icons';
import dynamic from 'next/dynamic';
import BannerFirst from './dependencies/banner-first';

const BannerSecond = dynamic(() => import('./dependencies/banner-second'), {
  loading: () => <BannerFirst />,
});
const BannerThird = dynamic(() => import('./dependencies/banner-third'), {
  loading: () => <BannerFirst />,
});
const BannerForth = dynamic(() => import('./dependencies/banner-forth'), {
  loading: () => <BannerFirst />,
});
const BannerFifth = dynamic(() => import('./dependencies/banner-fifth'), {
  loading: () => <BannerFirst />,
});
const BannerSixth = dynamic(() => import('./dependencies/banner-sixth'), {
  loading: () => <BannerFirst />,
});
const DropDown = dynamic(() => import('./dependencies/drop-down'), {
  loading: () => <BannerFirst />,
});

export const StyleBoxBanner: FC<IStyleBox> = () => {
  const { marginRtl, flexDirection, dirRtl } = useDirection();

  const { join } = useClass();
  const { designState, setSetting } = useDesign();
  const [open, setopen] = useState(false);

  const toggleDropdown = () => {
    setopen(!open);
  };

  const onSelectClick = (payload) => {
    setSetting(payload);
    toggleDropdown();
  };

  const ShowBox = () => {
    const { style } = designState.current.settings;
    switch (style) {
      case 'first':
        return <BannerFirst active />;
      case 'second':
        return <BannerSecond className="mt-17px" active join={join} />;
      case 'third':
        return <BannerThird className="mt-17px" active join={join} />;
      case 'forth':
        return <BannerForth className="mt-17px" active join={join} />;
      case 'fifth':
        return <BannerFifth className="mt-17px" join={join} active />;
      case 'sixth':
        return <BannerSixth className="mt-17px" active join={join} />;
      default:
        return <BannerFirst className="mt-17px" active join={join} />;
    }
  };

  const styleTitle = () => {
    const { style } = designState.current.settings;
    if (!style || style === 'first') return 'استایل 1';
    else if (style === 'second') return 'استایل 2';
    else if (style === 'third') return 'استایل 3';
    else if (style === 'forth') return 'استایل 4';
    else if (style === 'fifth') return 'استایل 5';
    else if (style === 'sixth') return 'استایل 6';
  };

  return (
    <Fragment>
      <div className={`w-full flex ${flexDirection} justify-between mt-30px`}>
        <div className={`flex ${flexDirection} cursor-pointer`}>
          <div className="text-16px font-iransans font-light text-white_shade-100 ">
            <div className="flex">
              <span dir={dirRtl}>{`نمایش : ${styleTitle()}`}</span>
            </div>
          </div>
        </div>
        <div
          className={`flex ${flexDirection} justify-center items-center`}
          onClick={toggleDropdown}
        >
          <span className="text-14px text-gray_shade-300 cursor-pointer">
            {open ? 'بازگشت' : 'ویرایش'}
          </span>
          {!open && (
            <ICEditStyle
              className={`${marginRtl}-1 text-16px cursor-pointer`}
              fill="#9ba3b5"
            />
          )}
        </div>
      </div>
      <div className="w-full bg-gray_shade-800 rounded flex flex-col px-16px py-15px mt-10px">
        {open ? (
          <DropDown
            designState={designState}
            onSelectClick={onSelectClick}
            join={join}
          />
        ) : (
          <ShowBox />
        )}
      </div>
    </Fragment>
  );
};
