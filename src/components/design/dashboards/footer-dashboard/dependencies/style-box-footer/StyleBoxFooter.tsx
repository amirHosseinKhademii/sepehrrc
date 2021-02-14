import { useClass, useDesign } from 'hooks';
import { FC, useState } from 'react';
import { ICEditSettings } from 'icons';
import dynamic from 'next/dynamic';
import FooterFirst from './dependencies/footer-first';

const BannerSecond = dynamic(() => import('./dependencies/footer-second'), {
  loading: () => <FooterFirst />,
});
const DropDown = dynamic(() => import('./dependencies/drop-down'), {
  loading: () => <FooterFirst />,
});

export const StyleBoxFooter: FC<IStyleBox> = () => {
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
        return <FooterFirst active />;
      case 'second':
        return <BannerSecond className="mt-17px" active join={join} />;
      default:
        return <FooterFirst className="mt-17px" active join={join} />;
    }
  };

  const styleTitle = () => {
    const { style } = designState.current.settings;
    if (!style || style === 'first') return '1 نمایش : استایل ';
    else if (style === 'second') return '2 نمایش : استایل ';
  };

  return (
    <div className="w-full bg-gray_shade-800 rounded flex flex-col px-16px py-15px mt-30px">
      <div className="flex justify-between">
        <div className="flex cursor-pointer" onClick={toggleDropdown}>
          {!open && <ICEditSettings className="mr-1 cursor-pointer" />}
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
