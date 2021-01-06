import { useClass, useStyleBox } from 'hooks';
import { FC } from 'react';
import { ICEditSettings } from 'icons';

interface IStyleBox {
  variation?: 'first' | 'second' | 'third' | 'forth' | 'fifth' | 'sixth';
  onEdit?: any;
  className?: string;
  onClick?: any;
}

export const StyleBoxBanner: FC<IStyleBox> = () => {
  const { join } = useClass();
  const { onEditClick, onSelect, styleBoxState } = useStyleBox();

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
      className={join(' flex mt-16px w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className="flex flex-col items-center mr-6px">
        <BlueBox className="w-75px h-35px" number="2" />
        <BlueBox className="w-75px h-35px mt-5px" number="3" />
      </div>
      <div className="">
        <BlueBox className="w-155px h-75px" number="1" />
      </div>
    </div>
  );

  const SecondVariation: FC<IStyleBox> = ({ className, onClick }) => (
    <div
      className={join(' flex mt-16px w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className="flex flex-col items-center ">
        <BlueBox className=" w-52px h-35px" number="4" />
        <BlueBox className="w-52px h-35px mt-5px" number="5" />
      </div>
      <div className=" mx-6px">
        <BlueBox className="w-122px h-75px" number="1" />
      </div>
      <div className="flex flex-col items-center ">
        <BlueBox className=" w-52px h-35px" number="2" />
        <BlueBox className="w-52px h-35px mt-5px" number="3" />
      </div>
    </div>
  );

  const ThirdVariation: FC<IStyleBox> = ({ className, onClick }) => (
    <div
      className={join(' flex mt-16px w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className="flex flex-col items-center ">
        <BlueBox className=" w-77px h-35px" number="4" />
        <BlueBox className="w-77px h-35px mt-5px" number="5" />
      </div>
      <div className="flex flex-col items-center mx-4px ">
        <BlueBox className=" w-77px h-35px" number="4" />
        <BlueBox className="w-77px h-35px mt-5px" number="5" />
      </div>
      <div className="flex flex-col items-center ">
        <BlueBox className=" w-77px h-35px" number="4" />
        <BlueBox className="w-77px h-35px mt-5px" number="5" />
      </div>
    </div>
  );

  const ForthVariation: FC<IStyleBox> = ({ className, onClick }) => (
    <div
      className={join(' flex mt-16px w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className="flex flex-col items-center ">
        <BlueBox className=" w-116px h-35px" number="4" />
        <BlueBox className="w-116px h-35px mt-5px" number="5" />
      </div>
      <div className="flex flex-col items-center ml-6px ">
        <BlueBox className=" w-116px h-35px" number="4" />
        <BlueBox className="w-116px h-35px mt-5px" number="5" />
      </div>
    </div>
  );

  const FifthVariation: FC<IStyleBox> = ({ className, onClick }) => (
    <div
      className={join(' flex mt-16px w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className="flex flex-col items-center mr-6px ">
        <BlueBox className=" w-116px h-35px" number="4" />
      </div>
      <div className="flex flex-col items-center ">
        <BlueBox className=" w-116px h-35px" number="4" />
      </div>
    </div>
  );

  const SixthVariation: FC<IStyleBox> = ({ className, onClick }) => (
    <div
      className={join(' flex mt-16px w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className="flex flex-col items-center ">
        <BlueBox className=" w-77px h-35px" number="4" />
      </div>
      <div className="flex flex-col items-center mx-4px ">
        <BlueBox className=" w-77px h-35px" number="4" />
      </div>
      <div className="flex flex-col items-center ">
        <BlueBox className=" w-77px h-35px" number="4" />
      </div>
    </div>
  );

  return (
    <div className="w-full bg-gray_shade-500 rounded flex flex-col  px-16px py-21px">
      <div className="flex justify-between">
        <div className="flex cursor-pointer" onClick={onEditClick}>
          <ICEditSettings className="mr-1 cursor-pointer" />
          <span className="text-14px text-gray_shade-300">ویرایش</span>
        </div>
        <span className="text-16px  text-white_shade-100 ">
          نمایش: استایل 1
        </span>
      </div>
      {styleBoxState.open ? (
        <div className="grid grid-cols-1 gap-y-2">
          <FirstVariation onClick={() => onSelect('first')} />
          <SecondVariation
            className=" border-t pt-4 border-gray-400"
            onClick={() => onSelect('second')}
          />
          <ThirdVariation
            className=" border-t pt-4 border-gray-400"
            onClick={() => onSelect('third')}
          />
          <ForthVariation
            className=" border-t pt-4 border-gray-400"
            onClick={() => onSelect('forth')}
          />
          <FifthVariation
            className=" border-t pt-4 border-gray-400"
            onClick={() => onSelect('fifth')}
          />
          <SixthVariation
            className=" border-t pt-4 border-gray-400"
            onClick={() => onSelect('sixth')}
          />
        </div>
      ) : (
        (styleBoxState.variation === 'first' && <FirstVariation />) ||
        (styleBoxState.variation === 'second' && <SecondVariation />) ||
        (styleBoxState.variation === 'third' && <ThirdVariation />) ||
        (styleBoxState.variation === 'forth' && <ForthVariation />) ||
        (styleBoxState.variation === 'fifth' && <FifthVariation />) ||
        (styleBoxState.variation === 'sixth' && <SixthVariation />)
      )}
    </div>
  );
};
