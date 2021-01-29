import { useClass, useDesign } from 'hooks';
import { FC, useState } from 'react';
import { ICEditSettings } from 'icons';

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

  const BlueBox = ({ className, active }) => (
    <div className={toggle(className, 'bg-primary-300', active, 'bg-gray-500')}>
      {' '}
    </div>
  );

  const FirstVariation: FC<IStyleBoxHeader> = ({
    className,
    onClick,
    active,
  }) => (
    <div
      className={toggle(
        join(
          ' flex items-center w-full h-27px  rounded-2px mx-auto px-9px  ',
          className
        ),
        'bg-primary-700',
        active,
        'bg-gray-800'
      )}
      onClick={onClick}
      style={{ direction: 'rtl' }}
    >
      <BlueBox active={active} className="w-30px h-9px  rounded-7px" />
      <BlueBox active={active} className="w-80px h-9px mr-5px rounded-5px" />
      <BlueBox active={active} className="w-30px h-9px mr-75px rounded-7px" />
    </div>
  );

  const SecondVariation: FC<IStyleBoxHeader> = ({
    className,
    onClick,
    active,
  }) => (
    <div
      className={toggle(
        join(
          ' flex items-center w-full h-27px  rounded-2px mx-auto px-9px  ',
          className
        ),
        'bg-primary-700',
        active,
        'bg-gray-800'
      )}
      onClick={onClick}
      style={{ direction: 'rtl' }}
    >
      <BlueBox active={active} className="w-80px h-9px  rounded-5px" />
      <BlueBox active={active} className="w-30px h-9px mr-14px rounded-7px" />
      <BlueBox active={active} className="w-80px h-9px mr-14px rounded-5px" />
    </div>
  );

  const ThirdVariation: FC<IStyleBoxHeader> = ({
    className,
    onClick,
    active,
  }) => (
    <div
      className={toggle(
        join(
          ' flex items-center w-full h-27px  rounded-2px mx-auto px-9px  ',
          className
        ),
        'bg-primary-700',
        active,
        'bg-gray-800'
      )}
      onClick={onClick}
      style={{ direction: 'rtl' }}
    >
      <div
        className={toggle(
          'flex items-center h-27px w-full px-9px',
          'bg-primary-700',
          active,
          'bg-gray-800'
        )}
      >
        <BlueBox active={active} className="w-30px h-9px  rounded-7px" />
        <BlueBox active={active} className="w-80px h-9px mr-40px rounded-5px" />
        <BlueBox active={active} className="w-30px h-9px mr-40px rounded-7px" />
      </div>
      <BlueBox active={active} className="w-full h-13px "></BlueBox>
    </div>
  );

  const FourthVariation: FC<IStyleBoxHeader> = ({
    className,
    onClick,
    active,
  }) => (
    <div
      className={toggle(
        join(
          ' flex items-center w-full h-27px  rounded-2px mx-auto px-9px  ',
          className
        ),
        'bg-primary-700',
        active,
        'bg-gray-800'
      )}
      onClick={onClick}
      style={{ direction: 'rtl' }}
    >
      <div
        className={toggle(
          'flex items-center h-27px w-full px-9px',
          'bg-primary-700',
          active,
          'bg-gray-800'
        )}
      >
        <BlueBox active={active} className="w-30px h-9px  rounded-7px" />
        <BlueBox active={active} className="w-80px h-9px mr-40px rounded-5px" />
        <BlueBox active={active} className="w-9px h-9px mr-25px rounded-full" />
        <BlueBox active={active} className="w-30px h-9px mr-5px rounded-7px" />
      </div>
      <BlueBox active={active} className="w-full h-13px "></BlueBox>
    </div>
  );

  const FifthVariation: FC<IStyleBoxHeader> = ({
    className,
    onClick,
    active,
  }) => (
    <div
      className={toggle(
        join(
          ' flex items-center w-full h-27px  rounded-2px mx-auto px-9px  ',
          className
        ),
        'bg-primary-700',
        active,
        'bg-gray-800'
      )}
      onClick={onClick}
      style={{ direction: 'rtl' }}
    >
      <div
        className={toggle(
          'flex items-center h-27px w-full px-9px',
          'bg-primary-700',
          active,
          'bg-gray-800'
        )}
      >
        <BlueBox active={active} className="w-30px h-9px  rounded-7px" />
        <BlueBox active={active} className="w-80px h-9px mr-5px rounded-5px" />
        <BlueBox active={active} className="w-30px h-9px mr-75px rounded-7px" />
      </div>
      <BlueBox active={active} className="w-full h-13px "></BlueBox>
    </div>
  );

  const SixthVariation: FC<IStyleBoxHeader> = ({
    className,
    onClick,
    active,
  }) => (
    <div
      className={toggle(
        join(
          ' flex items-center w-full h-27px  rounded-2px mx-auto px-9px  ',
          className
        ),
        'bg-primary-700',
        active,
        'bg-gray-800'
      )}
      onClick={onClick}
      style={{ direction: 'rtl' }}
    >
      <div
        className={toggle(
          'flex items-center h-27px w-full px-9px',
          'bg-primary-700',
          active,
          'bg-gray-800'
        )}
      >
        <BlueBox active={active} className="w-30px h-9px  rounded-7px" />
        <BlueBox active={active} className="w-80px h-9px mr-5px rounded-5px" />
        <BlueBox active={active} className="w-9px h-9px mr-61px rounded-full" />
        <BlueBox active={active} className="w-30px h-9px mr-5px rounded-7px" />
      </div>
      <BlueBox active={active} className="w-full h-13px "></BlueBox>
    </div>
  );
  const SeventhVariation: FC<IStyleBoxHeader> = ({
    className,
    onClick,
    active,
  }) => (
    <div
      className={toggle(
        join(
          ' flex items-center w-full h-27px  rounded-2px mx-auto px-9px  ',
          className
        ),
        'bg-primary-700',
        active,
        'bg-gray-800'
      )}
      onClick={onClick}
      style={{ direction: 'rtl' }}
    >
      <div
        className={toggle(
          'flex items-center h-27px w-full px-9px',
          'bg-primary-700',
          active,
          'bg-gray-800'
        )}
      >
        <BlueBox active={active} className="w-80px h-9px  rounded-5px" />
        <BlueBox active={active} className="w-30px h-9px mx-15px rounded-7px" />
        <BlueBox active={active} className="w-80px h-9px  rounded-5px" />
      </div>
      <BlueBox active={active} className="w-full h-13px "></BlueBox>
    </div>
  );
  const EighthVariation: FC<IStyleBoxHeader> = ({
    className,
    onClick,
    active,
  }) => (
    <div
      className={toggle(
        join(
          ' flex items-center w-full h-27px  rounded-2px mx-auto px-9px  ',
          className
        ),
        'bg-primary-700',
        active,
        'bg-gray-800'
      )}
      onClick={onClick}
      style={{ direction: 'rtl' }}
    >
      <BlueBox active={active} className="w-full h-13px "></BlueBox>

      <div
        className={toggle(
          'flex items-center h-27px w-full px-9px',
          'bg-primary-700',
          active,
          'bg-gray-800'
        )}
      >
        <BlueBox active={active} className="w-30px h-9px  rounded-7px" />
        <BlueBox active={active} className="w-80px h-9px mx-40px rounded-5px" />
        <BlueBox active={active} className="w-30px h-9px rounded-7px" />
      </div>
      <BlueBox active={active} className="w-full h-13px "></BlueBox>
    </div>
  );

  const ShowBox = () => {
    const { style } = designState.current.settings;

    if (!style || style === 'first') return <FirstVariation active />;
    else if (style === 'second') return <SecondVariation active />;
    else if (style === 'third') return <ThirdVariation active />;
    else if (style === 'fourth') return <FourthVariation active />;
    else if (style === 'fifth') return <FifthVariation active />;
    else if (style === 'sixth') return <SixthVariation active />;
    else if (style === 'seventh') return <SeventhVariation active />;
    else if (style === 'eighth') return <EighthVariation active />;
    else return <FirstVariation />;
  };

  const DropDown = () => (
    <div
      className="grid grid-cols-1 gap-y-20px focus:ring-2 focus:ring-blue-500 "
      style={{ direction: 'rtl' }}
    >
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px ">استایل 1</p>
        <FirstVariation onClick={() => onSelectClick({ style: 'first' })} />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 2</p>

        <SecondVariation onClick={() => onSelectClick({ style: 'second' })} />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 3</p>

        <ThirdVariation onClick={() => onSelectClick({ style: 'third' })} />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 4</p>

        <FourthVariation onClick={() => onSelectClick({ style: 'fourth' })} />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 5</p>

        <FifthVariation onClick={() => onSelectClick({ style: 'fifth' })} />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 6</p>

        <SixthVariation onClick={() => onSelectClick({ style: 'sixth' })} />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 7</p>

        <SeventhVariation onClick={() => onSelectClick({ style: 'seventh' })} />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 8</p>

        <EighthVariation onClick={() => onSelectClick({ style: 'eighth' })} />
      </div>
    </div>
  );

  const styleTitle = () => {
    const { style } = designState.current.settings;

    if (!style || style === 'first') return '1 نمایش : استایل ';
    else if (style === 'second') return '2 نمایش : استایل ';
    else if (style === 'third') return '3 نمایش : استایل ';
    else if (style === 'fourth') return '4 نمایش : استایل ';
    else if (style === 'fifth') return '5 نمایش : استایل ';
    else if (style === 'sixth') return '6 نمایش : استایل ';
    else if (style === 'seventh') return '7 نمایش : استایل ';
    else if (style === 'eighth') return '8 نمایش : استایل ';
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
        <span className="text-16px  text-white_shade-100 ">
          {open ? 'انتخاب کنید' : styleTitle()}
        </span>
      </div>
      {open ? <DropDown /> : <ShowBox />}
    </div>
  );
};
