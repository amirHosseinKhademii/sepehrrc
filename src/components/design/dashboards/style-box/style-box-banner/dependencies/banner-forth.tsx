import { FC, memo } from 'react';
import { BlueBox } from './blue-box';

export const BannerForth: FC<IStyleBox> = memo(
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
        <BlueBox
          className="h-35px mt-5px"
          number="4"
          active={active}
          join={join}
        />
      </div>
      <div className=" grid grid-cols-1 ml-6px ">
        <BlueBox className=" h-35px" number="1" active={active} join={join} />
        <BlueBox
          className=" h-35px mt-5px"
          number="3"
          active={active}
          join={join}
        />
      </div>
    </div>
  )
);
