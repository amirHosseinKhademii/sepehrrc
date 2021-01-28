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

  const BlueBox = ({ className, number, active = false }) => (
    <div
      className={join(
        `${
          active ? 'bg-primary-700' : 'bg-gray_shade-900'
        } rounded flex items-center justify-center`,
        className
      )}
    >
      <span
        className={`${
          active ? 'text-primary-400' : 'text-gray_shade-500'
        } text-14px`}
      >
        {number}
      </span>
    </div>
  );
  const LabelBox = ({ label }) => (
    <span className="text-gray_shade-300 font-iransans text-14px pt-8px text-right">
      {label}
    </span>
  );

  const FirstVariation: FC<IStyleBox> = ({ className, onClick, active }) => (
    <div
      className={join('grid grid-cols-3 w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className=" col-span-1 grid grid-cols-1 mr-6px">
        <BlueBox className=" h-35px" number="2" active={active} />
        <BlueBox className=" h-35px mt-5px" number="3" active={active} />
      </div>
      <div className=" col-span-2">
        <BlueBox className=" h-75px" number="1" active={active} />
      </div>
    </div>
  );

  const SecondVariation: FC<IStyleBox> = ({ className, onClick, active }) => (
    <div
      className={join('grid grid-cols-4 w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className=" col-span-1 grid grid-cols-1 ">
        <BlueBox className=" h-35px" number="4" active={active} />
        <BlueBox className=" h-35px mt-5px" number="5" active={active} />
      </div>
      <div className=" col-span-2 mx-6px">
        <BlueBox className=" h-75px" number="1" active={active} />
      </div>
      <div className=" grid grid-cols-1">
        <BlueBox className=" h-35px" number="2" active={active} />
        <BlueBox className="h-35px mt-5px" number="3" active={active} />
      </div>
    </div>
  );

  const ThirdVariation: FC<IStyleBox> = ({ className, onClick, active }) => (
    <div
      className={join(' grid grid-cols-3 w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className=" grid grid-cols-1 ">
        <BlueBox className="  h-35px" number="4" active={active} />
        <BlueBox className=" h-35px mt-5px" number="5" active={active} />
      </div>
      <div className=" grid grid-cols-1  mx-4px ">
        <BlueBox className=" h-35px" number="4" active={active} />
        <BlueBox className=" h-35px mt-5px" number="5" active={active} />
      </div>
      <div className=" grid grid-cols-1  ">
        <BlueBox className=" h-35px" number="4" active={active} />
        <BlueBox className=" h-35px mt-5px" number="5" active={active} />
      </div>
    </div>
  );

  const ForthVariation: FC<IStyleBox> = ({ className, onClick, active }) => (
    <div
      className={join(' grid grid-cols-2 w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className=" grid grid-cols-1 ">
        <BlueBox className="  h-35px" number="4" active={active} />
        <BlueBox className="h-35px mt-5px" number="5" active={active} />
      </div>
      <div className=" grid grid-cols-1 ml-6px ">
        <BlueBox className=" h-35px" number="4" active={active} />
        <BlueBox className=" h-35px mt-5px" number="5" active={active} />
      </div>
    </div>
  );

  const FifthVariation: FC<IStyleBox> = ({ className, onClick, active }) => (
    <div
      className={join(' grid grid-cols-2 w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className=" grid grid-cols-1 ">
        <BlueBox className="  h-35px" number="4" active={active} />
      </div>
      <div className=" grid grid-cols-1 ml-6px ">
        <BlueBox className=" h-35px" number="4" active={active} />
      </div>
    </div>
  );

  const SixthVariation: FC<IStyleBox> = ({ className, onClick, active }) => (
    <div
      className={join(' grid grid-cols-3 w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className=" grid grid-cols-1 ">
        <BlueBox className="  h-35px" number="4" active={active} />
      </div>
      <div className=" grid grid-cols-1  mx-4px ">
        <BlueBox className=" h-35px" number="4" active={active} />
      </div>
      <div className=" grid grid-cols-1  ">
        <BlueBox className=" h-35px" number="4" active={active} />
      </div>
    </div>
  );

  const ShowBox = () => {
    const { style } = designState.current.settings;
    if (!style || style === 'first')
      return <FirstVariation className="mt-17px" active />;
    else if (style === 'second')
      return <SecondVariation className="mt-17px" active />;
    else if (style === 'third')
      return <ThirdVariation className="mt-17px" active />;
    else if (style === 'forth')
      return <ForthVariation className="mt-17px" active />;
    else if (style === 'fifth')
      return <FifthVariation className="mt-17px" active />;
    else if (style === 'sixth')
      return <SixthVariation className="mt-17px" active />;
    else return <FirstVariation className="mt-17px" active />;
  };

  const DropDown = () => (
    <div className="grid grid-cols-1 gap-y-7px focus:ring-2 focus:ring-blue-500">
      <LabelBox label="استایل 1" />
      <FirstVariation onClick={() => onSelectClick({ style: 'first' })} />
      <LabelBox label="استایل 2" />
      <SecondVariation
        className="border-gray-400"
        onClick={() => onSelectClick({ style: 'second' })}
      />
      <LabelBox label="استایل 3" />
      <ThirdVariation
        className=" border-gray-400"
        onClick={() => onSelectClick({ style: 'third' })}
      />
      <LabelBox label="استایل 4" />
      <ForthVariation
        className=" border-gray-400"
        onClick={() => onSelectClick({ style: 'forth' })}
      />
      <LabelBox label="استایل 5" />
      <FifthVariation
        className=" border-gray-400"
        onClick={() => onSelectClick({ style: 'fifth' })}
      />
      <LabelBox label="استایل 6" />
      <SixthVariation
        className=" border-gray-400"
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
