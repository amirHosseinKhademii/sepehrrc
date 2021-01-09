import { useClass, useDesign } from 'hooks';
import { FC, useState } from 'react';
import { ICEditSettings } from 'icons';
import { IStyleBox } from './interface';

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

  const BlueBox = ({ className, number }) => (
    <div
      className={join(
        'bg-primary-700  rounded flex items-center justify-center',
        className
      )}
    >
      <span className="text-primary-300 text-14px">{number}</span>
    </div>
  );

  const FirstVariation: FC<IStyleBox> = ({ className, onClick }) => (
    <div
      className={join('grid grid-cols-3 w-full mt-16px  mx-auto', className)}
      onClick={onClick}
    >
      <div className=" col-span-1 grid grid-cols-1 mr-6px">
        <BlueBox className=" h-35px" number="2" />
        <BlueBox className=" h-35px mt-5px" number="3" />
      </div>
      <div className=" col-span-2">
        <BlueBox className=" h-75px" number="1" />
      </div>
    </div>
  );

  const SecondVariation: FC<IStyleBox> = ({ className, onClick }) => (
    <div
      className={join('grid grid-cols-4 w-full  mt-16px  mx-auto', className)}
      onClick={onClick}
    >
      <div className=" col-span-1 grid grid-cols-1 ">
        <BlueBox className=" h-35px" number="4" />
        <BlueBox className=" h-35px mt-5px" number="5" />
      </div>
      <div className=" col-span-2 mx-6px">
        <BlueBox className=" h-75px" number="1" />
      </div>
      <div className=" grid grid-cols-1">
        <BlueBox className=" h-35px" number="2" />
        <BlueBox className="h-35px mt-5px" number="3" />
      </div>
    </div>
  );

  const ThirdVariation: FC<IStyleBox> = ({ className, onClick }) => (
    <div
      className={join(' grid grid-cols-3 w-full mt-16px  mx-auto', className)}
      onClick={onClick}
    >
      <div className=" grid grid-cols-1 ">
        <BlueBox className="  h-35px" number="4" />
        <BlueBox className=" h-35px mt-5px" number="5" />
      </div>
      <div className=" grid grid-cols-1  mx-4px ">
        <BlueBox className=" h-35px" number="4" />
        <BlueBox className=" h-35px mt-5px" number="5" />
      </div>
      <div className=" grid grid-cols-1  ">
        <BlueBox className=" h-35px" number="4" />
        <BlueBox className=" h-35px mt-5px" number="5" />
      </div>
    </div>
  );

  const ForthVariation: FC<IStyleBox> = ({ className, onClick }) => (
    <div
      className={join(' grid grid-cols-2 w-full mt-16px mx-auto', className)}
      onClick={onClick}
    >
      <div className=" grid grid-cols-1 ">
        <BlueBox className="  h-35px" number="4" />
        <BlueBox className="h-35px mt-5px" number="5" />
      </div>
      <div className=" grid grid-cols-1 ml-6px ">
        <BlueBox className=" h-35px" number="4" />
        <BlueBox className=" h-35px mt-5px" number="5" />
      </div>
    </div>
  );

  const FifthVariation: FC<IStyleBox> = ({ className, onClick }) => (
    <div
      className={join(' grid grid-cols-2 w-full mt-16px mx-auto', className)}
      onClick={onClick}
    >
      <div className=" grid grid-cols-1 ">
        <BlueBox className="  h-35px" number="4" />
      </div>
      <div className=" grid grid-cols-1 ml-6px ">
        <BlueBox className=" h-35px" number="4" />
      </div>
    </div>
  );

  const SixthVariation: FC<IStyleBox> = ({ className, onClick }) => (
    <div
      className={join(' grid grid-cols-3 w-full mt-16px  mx-auto', className)}
      onClick={onClick}
    >
      <div className=" grid grid-cols-1 ">
        <BlueBox className="  h-35px" number="4" />
      </div>
      <div className=" grid grid-cols-1  mx-4px ">
        <BlueBox className=" h-35px" number="4" />
      </div>
      <div className=" grid grid-cols-1  ">
        <BlueBox className=" h-35px" number="4" />
      </div>
    </div>
  );

  const ShowBox = () => {
    const { style } = designState.current.settings;

    if (!style || style === 'first') return <FirstVariation />;
    else if (style === 'second') return <SecondVariation />;
    else if (style === 'third') return <ThirdVariation />;
    else if (style === 'forth') return <ForthVariation />;
    else if (style === 'fifth') return <FifthVariation />;
    else if (style === 'sixth') return <SixthVariation />;
  };

  const DropDown = () => (
    <div className="grid grid-cols-1 gap-y-2  focus:ring-2 focus:ring-blue-500">
      <FirstVariation onClick={() => onSelectClick({ style: 'first' })} />
      <SecondVariation
        className=" border-t pt-4 border-gray-400"
        onClick={() => onSelectClick({ style: 'second' })}
      />
      <ThirdVariation
        className=" border-t pt-4 border-gray-400"
        onClick={() => onSelectClick({ style: 'third' })}
      />
      <ForthVariation
        className=" border-t pt-4 border-gray-400"
        onClick={() => onSelectClick({ style: 'forth' })}
      />
      <FifthVariation
        className=" border-t pt-4 border-gray-400"
        onClick={() => onSelectClick({ style: 'fifth' })}
      />
      <SixthVariation
        className=" border-t pt-4 border-gray-400"
        onClick={() => onSelectClick({ style: 'sixth' })}
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
    <div className="w-full bg-gray_shade-500 rounded flex flex-col  px-16px py-21px">
      <div className="flex justify-between">
        <div className="flex cursor-pointer" onClick={toggleDropdown}>
          {!open && <ICEditSettings className="mr-1 cursor-pointer" />}
          <span className="text-14px text-gray_shade-300">
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
