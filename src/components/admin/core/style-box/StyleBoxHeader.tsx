import { useClass, useDesign } from 'hooks';
import { FC, useState } from 'react';
import { ICEditSettings } from 'icons';
import { IStyleBoxHeader } from './interface';

export const StyleBoxHeader: FC<IStyleBoxHeader> = () => {
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

  const BlueBox = ({ className }) => (
    <div className={join('bg-primary-300', className)}> </div>
  );

  const FirstVariation: FC<IStyleBoxHeader> = ({ className, onClick }) => (
    <div
      className={join(
        ' flex items-center w-full h-27px  rounded-2px mx-auto px-9px  bg-primary-700 ',
        className
      )}
      onClick={onClick}
      style={{ direction: 'rtl' }}
    >
      <BlueBox className="w-30px h-9px  rounded-7px" />
      <BlueBox className="w-80px h-9px mr-5px rounded-5px" />
      <BlueBox className="w-30px h-9px mr-75px rounded-7px" />
    </div>
  );

  const SecondVariation: FC<IStyleBoxHeader> = ({ className, onClick }) => (
    <div
      className={join(
        ' flex items-center w-full h-27px  rounded-2px mx-auto px-9px  bg-primary-700 ',
        className
      )}
      onClick={onClick}
      style={{ direction: 'rtl' }}
    >
      <BlueBox className="w-80px h-9px  rounded-5px" />
      <BlueBox className="w-30px h-9px mr-14px rounded-7px" />
      <BlueBox className="w-80px h-9px mr-14px rounded-5px" />
    </div>
  );

  const ThirdVariation: FC<IStyleBoxHeader> = ({ className, onClick }) => (
    <div
      className={join(
        ' flex flex-col items-center w-full h-40px  rounded-2px mx-auto   ',
        className
      )}
      style={{ direction: 'rtl' }}
      onClick={onClick}
    >
      <div className="flex items-center h-27px w-full  bg-primary-700 px-9px">
        <BlueBox className="w-30px h-9px  rounded-7px" />
        <BlueBox className="w-80px h-9px mr-40px rounded-5px" />
        <BlueBox className="w-30px h-9px mr-40px rounded-7px" />
      </div>
      <BlueBox className="w-full h-13px "></BlueBox>
    </div>
  );

  const FourthVariation: FC<IStyleBoxHeader> = ({ className, onClick }) => (
    <div
      className={join(
        ' flex flex-col items-center w-full h-40px  rounded-2px mx-auto   ',
        className
      )}
      style={{ direction: 'rtl' }}
      onClick={onClick}
    >
      <div className="flex items-center h-27px w-full px-9px  bg-primary-700">
        <BlueBox className="w-30px h-9px  rounded-7px" />
        <BlueBox className="w-80px h-9px mr-40px rounded-5px" />
        <BlueBox className="w-9px h-9px mr-25px rounded-full" />
        <BlueBox className="w-30px h-9px mr-5px rounded-7px" />
      </div>
      <BlueBox className="w-full h-13px "></BlueBox>
    </div>
  );

  const FifthVariation: FC<IStyleBoxHeader> = ({ className, onClick }) => (
    <div
      className={join(
        ' flex flex-col items-center w-full h-40px  rounded-2px mx-auto   ',
        className
      )}
      style={{ direction: 'rtl' }}
      onClick={onClick}
    >
      <div className="flex items-center h-27px w-full px-9px  bg-primary-700">
        <BlueBox className="w-30px h-9px  rounded-7px" />
        <BlueBox className="w-80px h-9px mr-5px rounded-5px" />
        <BlueBox className="w-30px h-9px mr-75px rounded-7px" />
      </div>
      <BlueBox className="w-full h-13px "></BlueBox>
    </div>
  );

  const SixthVariation: FC<IStyleBoxHeader> = ({ className, onClick }) => (
    <div
      className={join(
        ' flex flex-col items-center w-full h-40px  rounded-2px mx-auto   ',
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center h-27px w-full px-9px bg-primary-700">
        <BlueBox className="w-30px h-9px  rounded-7px" />
        <BlueBox className="w-80px h-9px mr-5px rounded-5px" />
        <BlueBox className="w-9px h-9px mr-61px rounded-full" />
        <BlueBox className="w-30px h-9px mr-5px rounded-7px" />
      </div>
      <BlueBox className="w-full h-13px "></BlueBox>
    </div>
  );
  const SeventhVariation: FC<IStyleBoxHeader> = ({ className, onClick }) => (
    <div
      className={join(
        ' flex flex-col items-center w-full h-40px  rounded-2px mx-auto   ',
        className
      )}
      style={{ direction: 'rtl' }}
      onClick={onClick}
    >
      <div className="flex items-center h-27px w-full  bg-primary-700 px-9px">
        <BlueBox className="w-80px h-9px  rounded-5px" />
        <BlueBox className="w-30px h-9px mr-15px rounded-7px" />
        <BlueBox className="w-80px h-9px  rounded-5px" />
      </div>
      <BlueBox className="w-full h-13px "></BlueBox>
    </div>
  );
  const EighthVariation: FC<IStyleBoxHeader> = ({ className, onClick }) => (
    <div
      className={join(
        ' flex flex-col items-center w-full h-40px  rounded-2px mx-auto   ',
        className
      )}
      onClick={onClick}
      style={{ direction: 'rtl' }}
    >
      <BlueBox className="w-full h-13px "></BlueBox>

      <div className="flex items-center h-27px w-full px-9px bg-primary-700 ">
        <BlueBox className="w-30px h-9px  rounded-7px" />
        <BlueBox className="w-80px h-9px mx-40px rounded-5px" />
        <BlueBox className="w-30px h-9px rounded-7px" />
      </div>
      <BlueBox className="w-full h-13px "></BlueBox>
    </div>
  );

  const ShowBox = () => {
    const { style } = designState.current.settings;

    if (!style || style === 'first') return <FirstVariation />;
    else if (style === 'second') return <SecondVariation />;
    else if (style === 'third') return <ThirdVariation />;
    else if (style === 'forth') return <FourthVariation />;
    else if (style === 'fifth') return <FifthVariation />;
    else if (style === 'sixth') return <SixthVariation />;
    else if (style === 'seventh') return <SeventhVariation />;
    else if (style === 'eighth') return <EighthVariation />;
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

        <SecondVariation
          className=" border-t  border-gray-400"
          onClick={() => onSelectClick({ style: 'second' })}
        />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 3</p>

        <ThirdVariation
          className=" border-t  border-gray-400"
          onClick={() => onSelectClick({ style: 'third' })}
        />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 4</p>

        <FourthVariation
          className=" border-t  border-gray-400"
          onClick={() => onSelectClick({ style: 'fourth' })}
        />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 5</p>

        <FifthVariation
          className=" border-t  border-gray-400"
          onClick={() => onSelectClick({ style: 'fifth' })}
        />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 6</p>

        <SixthVariation
          className=" border-t  border-gray-400"
          onClick={() => onSelectClick({ style: 'sixth' })}
        />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 7</p>

        <SeventhVariation
          className=" border-t  border-gray-400"
          onClick={() => onSelectClick({ style: 'seventh' })}
        />
      </div>
      <div>
        <p className="mb-10px text-gray_shade-300 text-14px">استایل 8</p>

        <EighthVariation
          className=" border-t  border-gray-400"
          onClick={() => onSelectClick({ style: 'eighth' })}
        />
      </div>
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
