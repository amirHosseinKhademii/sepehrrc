import { useClass, useDesign, useDirection } from 'hooks';
import { FC, useState } from 'react';
import { ICEditSettings } from 'icons';
import { HeaderFirst } from './dependencies';
import dynamic from 'next/dynamic';

const DropDown = dynamic(() => import('./dependencies/drop-down'), {
  loading: () => <HeaderFirst />,
});
const HeaderSecond = dynamic(() => import('./dependencies/header-second'), {
  loading: () => <HeaderFirst />,
});
const HeaderThird = dynamic(() => import('./dependencies/header-third'), {
  loading: () => <HeaderFirst />,
});
const HeaderFourth = dynamic(() => import('./dependencies/header-fourth'), {
  loading: () => <HeaderFirst />,
});
const HeaderFifth = dynamic(() => import('./dependencies/header-fifth'), {
  loading: () => <HeaderFirst />,
});
const HeaderSixth = dynamic(() => import('./dependencies/header-sixth'), {
  loading: () => <HeaderFirst />,
});
const HeaderSeventh = dynamic(() => import('./dependencies/header-seventh'), {
  loading: () => <HeaderFirst />,
});
const HeaderEighth = dynamic(() => import('./dependencies/header-eighth'), {
  loading: () => <HeaderFirst />,
});

export const StyleBoxHeader: FC<IStyleBoxHeader> = () => {
  const { marginRtl } = useDirection();
  const { join, toggle } = useClass();
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
        return <HeaderFirst active join={join} toggle={toggle} />;
      case 'second':
        return <HeaderSecond active join={join} toggle={toggle} />;
      case 'third':
        return <HeaderThird active join={join} toggle={toggle} />;
      case 'fourth':
        return <HeaderFourth active join={join} toggle={toggle} />;
      case 'fifth':
        return <HeaderFifth active join={join} toggle={toggle} />;
      case 'sixth':
        return <HeaderSixth active join={join} toggle={toggle} />;
      case 'seventh':
        return <HeaderSeventh active join={join} toggle={toggle} />;
      case 'eighth':
        return <HeaderEighth active join={join} toggle={toggle} />;

      default:
        return <HeaderFirst active join={join} toggle={toggle} />;
    }
  };

  const styleTitle = () => {
    const { style } = designState.current.settings;
    switch (style) {
      case 'first':
        return '1 نمایش : استایل ';
      case 'second':
        return '2 نمایش : استایل ';
      case 'third':
        return '3 نمایش : استایل ';
      case 'fourth':
        return '4 نمایش : استایل ';
      case 'fifth':
        return '5 نمایش : استایل ';
      case 'sixth':
        return '6 نمایش : استایل ';
      case 'seventh':
        return '7 نمایش : استایل ';
      case 'eighth':
        return '8 نمایش : استایل ';
      default:
        return '1 نمایش : استایل ';
    }
  };

  return (
    <div className="w-full bg-gray_shade-800 rounded flex flex-col  px-16px py-21px">
      <div className="flex justify-between pb-20px">
        <div className="flex cursor-pointer" onClick={toggleDropdown}>
          {!open && (
            <ICEditSettings className={`${marginRtl}-1 cursor-pointer`} />
          )}
          <span className="text-14px text-gray_shade-300 ">
            {open ? 'بازگشت' : 'ویرایش'}
          </span>
        </div>
        <span className="text-16px font-iransans font-light text-white_shade-100 ">
          {open ? 'انتخاب کنید' : styleTitle()}
        </span>
      </div>
      {open ? (
        <DropDown
          designState={designState}
          toggle={toggle}
          join={join}
          onSelectClick={onSelectClick}
        />
      ) : (
        <ShowBox />
      )}
    </div>
  );
};
