import { useClass, useDesign } from 'hooks';
import { FC, useState } from 'react';
import { ICEditSettings } from 'icons';
import {
  HeaderFirst,
  HeaderSecond,
  HeaderThird,
  HeaderFourth,
  HeaderFifth,
  HeaderSixth,
  HeaderSeventh,
  HeaderEighth,
  LabelBox,
} from './dependencies';

export const StyleBoxHeader: FC<IStyleBoxHeader> = () => {
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
  const DropDown = () => {
    const { style } = designState.current.settings;

    return (
      <div
        className="grid grid-cols-1 gap-y-20px focus:ring-2 focus:ring-blue-500 "
        style={{ direction: 'rtl' }}
      >
        <div>
          <LabelBox label="استایل 1" />
          <HeaderFirst
            join={join}
            toggle={toggle}
            active={!style || style === 'first'}
            onClick={() => onSelectClick({ style: 'first' })}
          />
        </div>
        <div>
          <LabelBox label="استایل 2" />

          <HeaderSecond
            join={join}
            toggle={toggle}
            active={style === 'second'}
            onClick={() => onSelectClick({ style: 'second' })}
          />
        </div>
        <div>
          <LabelBox label="استایل 3" />

          <HeaderThird
            join={join}
            toggle={toggle}
            active={style === 'third'}
            onClick={() => onSelectClick({ style: 'third' })}
          />
        </div>
        <div>
          <LabelBox label=" استایل 4" />

          <HeaderFourth
            join={join}
            toggle={toggle}
            active={style === 'fourth'}
            onClick={() => onSelectClick({ style: 'fourth' })}
          />
        </div>
        <div>
          <LabelBox label=" استایل 5" />

          <HeaderFifth
            join={join}
            toggle={toggle}
            active={style === 'fifth'}
            onClick={() => onSelectClick({ style: 'fifth' })}
          />
        </div>
        <div>
          <LabelBox label="استایل 6 " />

          <HeaderSixth
            join={join}
            toggle={toggle}
            active={style === 'sixth'}
            onClick={() => onSelectClick({ style: 'sixth' })}
          />
        </div>
        <div>
          <LabelBox label="استایل 7 " />

          <HeaderSeventh
            join={join}
            toggle={toggle}
            active={style === 'seventh'}
            onClick={() => onSelectClick({ style: 'seventh' })}
          />
        </div>
        <div>
          <LabelBox label="استایل 8 " />

          <HeaderEighth
            join={join}
            toggle={toggle}
            active={style === 'eighth'}
            onClick={() => onSelectClick({ style: 'eighth' })}
          />
        </div>
      </div>
    );
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
          {!open && <ICEditSettings className="mr-1 cursor-pointer" />}
          <span className="text-14px text-gray_shade-300 ">
            {open ? 'بازگشت' : 'ویرایش'}
          </span>
        </div>
        <span className="text-16px font-iransans font-light text-white_shade-100 ">
          {open ? 'انتخاب کنید' : styleTitle()}
        </span>
      </div>
      {open ? <DropDown /> : <ShowBox />}
    </div>
  );
};
