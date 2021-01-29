import { FC, memo } from 'react';
import { BlueBox } from './blue-box';

export const BannerFirst: FC<IStyleBox> = memo(
  ({ className, onClick, active, join }) => (
    <div
      className={join('grid grid-cols-3 w-full mx-auto', className)}
      onClick={onClick}
    >
      <div className=" col-span-1 grid grid-cols-1 mr-6px">
        <BlueBox className=" h-35px" number="2" active={active} join={join} />
        <BlueBox
          className=" h-35px mt-5px"
          number="3"
          active={active}
          join={join}
        />
      </div>
      <div className=" col-span-2">
        <BlueBox className=" h-75px" number="1" active={active} join={join} />
      </div>
    </div>
  )
);
