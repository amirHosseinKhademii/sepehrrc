import { useClass, useDesign, useDirection } from 'hooks';
import { FC, useState } from 'react';
import { ICEditSettings } from 'icons';
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
  const { marginRtl } = useDirection();

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
    if (!style || style === 'first') return '1 نمایش : استایل ';
    else if (style === 'second') return '2 نمایش : استایل ';
    else if (style === 'third') return '3 نمایش : استایل ';
    else if (style === 'forth') return '4 نمایش : استایل ';
    else if (style === 'fifth') return '5 نمایش : استایل ';
    else if (style === 'sixth') return '6 نمایش : استایل ';
  };

  return (
    <div className="w-full bg-gray_shade-800 rounded flex flex-col px-16px py-15px mt-30px">
      <div className="flex justify-between">
        <div className="flex cursor-pointer" onClick={toggleDropdown}>
          {!open && (
            <ICEditSettings className={`${marginRtl}-1 cursor-pointer`} />
          )}
          <span className="text-14px font-iransans text-gray_shade-300">
            {open ? 'بازگشت' : 'ویرایش'}
          </span>
        </div>
        <span className="text-16px font-iransans font-light text-white_shade-100 ">
          {styleTitle()}
        </span>
      </div>
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
  );
};
