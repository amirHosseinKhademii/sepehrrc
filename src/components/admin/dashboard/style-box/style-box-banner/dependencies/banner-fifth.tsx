import { FC, memo } from 'react';
import { BlueBox } from './blue-box';

export const BannerFifth: FC<IStyleBox> = memo(
  ({ className, onClick, active, join }) => (
    <div
      className={join(' grid grid-cols-2 w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className=" grid grid-cols-1 ">
        <BlueBox className="  h-35px" number="4" active={active} join={join} />
      </div>
      <div className=" grid grid-cols-1 ml-6px ">
        <BlueBox className=" h-35px" number="4" active={active} join={join} />
      </div>
    </div>
  )
);
