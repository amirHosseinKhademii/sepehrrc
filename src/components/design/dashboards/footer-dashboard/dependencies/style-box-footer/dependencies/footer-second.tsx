import { FC, memo } from 'react';
import { BlueBox } from './blue-box';

const BannerSecond: FC<IStyleBox> = memo(
  ({ className, onClick, active, join }) => (
    <div
      className={join(
        'grid grid-cols-4 w-full mx-auto cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className=" col-span-1 grid grid-cols-1 ">
        <BlueBox className=" h-35px"  active={active} join={join} />
        <BlueBox
          className=" h-35px mt-5px"
      
          active={active}
          join={join}
        />
      </div>
      <div className=" col-span-2 mx-6px">
        <BlueBox className=" h-75px"  active={active} join={join} />
      </div>
      <div className=" grid grid-cols-1">
        <BlueBox className=" h-35px"  active={active} join={join} />
        <BlueBox
          className="h-35px mt-5px"
          
          active={active}
          join={join}
        />
      </div>
    </div>
  )
);

export default BannerSecond;
