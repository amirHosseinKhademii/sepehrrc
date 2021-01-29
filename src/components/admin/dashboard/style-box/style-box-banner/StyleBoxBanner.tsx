import { useClass, useDesign } from 'hooks';
import { FC, useState } from 'react';
import { ICEditSettings } from 'icons';
import {
  BannerFirst,
  BannerSixth,
  BannerFifth,
  BannerThird,
  BannerSecond,
  BannerForth,
  LabelBox,
} from './dependencies';

export const StyleBoxBanner: FC<IStyleBox> = () => {
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
        return <BannerFirst className="mt-17px" active join={join} />;
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

  const DropDown = () => (
    <div className="grid grid-cols-1 gap-y-7px focus:ring-2 focus:ring-blue-500">
      <LabelBox label="استایل 1" />
      <BannerFirst
        onClick={() => onSelectClick({ style: 'first' })}
        join={join}
      />
      <LabelBox label="استایل 2" />
      <BannerSecond
        className="border-gray-400"
        onClick={() => onSelectClick({ style: 'second' })}
        join={join}
      />
      <LabelBox label="استایل 3" />
      <BannerThird
        className=" border-gray-400"
        onClick={() => onSelectClick({ style: 'third' })}
        join={join}
      />
      <LabelBox label="استایل 4" />
      <BannerForth
        className=" border-gray-400"
        onClick={() => onSelectClick({ style: 'forth' })}
        join={join}
      />
      <LabelBox label="استایل 5" />
      <BannerFifth
        className=" border-gray-400"
        onClick={() => onSelectClick({ style: 'fifth' })}
        join={join}
      />
      <LabelBox label="استایل 6" />
      <BannerSixth
        className=" border-gray-400"
        onClick={() => onSelectClick({ style: 'sixth' })}
        join={join}
      />
    </div>
  );

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
          {!open && <ICEditSettings className="mr-1 cursor-pointer" />}
          <span className="text-14px font-iransans text-gray_shade-300">
            {open ? 'ذخیره' : 'ویرایش'}
          </span>
        </div>
        <span className="text-16px font-iransans font-light text-white_shade-100 ">
          {styleTitle()}
        </span>
      </div>
      {open ? <DropDown /> : <ShowBox />}
    </div>
  );
};
