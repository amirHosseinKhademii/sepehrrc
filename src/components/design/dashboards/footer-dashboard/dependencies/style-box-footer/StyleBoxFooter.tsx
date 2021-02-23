import { useClass, useDesign, useDirection } from 'hooks';
import { FC, useState } from 'react';
import { ICEditStyle } from 'icons';
import dynamic from 'next/dynamic';
import FooterFirst from './dependencies/footer-first';

const FooterSecond = dynamic(() => import('./dependencies/footer-second'), {
  loading: () => <FooterFirst />,
});
const DropDown = dynamic(() => import('./dependencies/drop-down'), {
  loading: () => <FooterFirst />,
});

export const StyleBoxFooter: FC<IStyleBox> = () => {
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
        return <FooterFirst className="" active />;
      case 'second':
        return <FooterSecond className="" join={join} active />;
      default:
        return <FooterFirst className="" join={join} active />;
    }
  };

  const styleTitle = () => {
    const { style } = designState.current.settings;
    if (!style || style === 'first') return '1 نمایش : استایل ';
    else if (style === 'second') return '2 نمایش : استایل ';
  };

  return (
    <div className="flex flex-col justify-between w-full">
      <div className="flex justify-between">
        <div className="flex cursor-pointer" onClick={toggleDropdown}>
          {!open && (
            <ICEditStyle
              fill="#9ba3b5"
              className={`${marginRtl}-1 text-18px cursor-pointer`}
            />
          )}
          <span className="text-14px font-iransans text-gray_shade-300">
            {open ? 'بازگشت' : 'ویرایش'}
          </span>
        </div>
        <span className="text-16px font-iransans font-light text-white_shade-100 ">
          {styleTitle()}
        </span>
      </div>

      <div className="w-full bg-gray_shade-800 rounded flex flex-col px-16px mt-10px py-17px">
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
    </div>
  );
};
