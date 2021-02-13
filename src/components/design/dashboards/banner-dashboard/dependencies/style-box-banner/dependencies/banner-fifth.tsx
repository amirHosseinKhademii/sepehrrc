import { FC, memo } from 'react';
import { BlueBox } from './blue-box';

const BannerFifth: FC<IStyleBox> = memo(
  ({ className, onClick, active, join }) => (
    <div
      className={join(
        ' grid grid-cols-2 w-full mx-auto cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className=" grid grid-cols-1 ">
        <BlueBox className="  h-35px" number="2" active={active} join={join} />
      </div>
      <div className=" grid grid-cols-1 ml-6px ">
        <BlueBox className=" h-35px" number="1" active={active} join={join} />
      </div>
    </div>
  )
);

export default BannerFifth;
