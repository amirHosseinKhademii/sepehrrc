import { FC, memo } from 'react';
import { BlueBox } from './blue-box';
import { useDirection } from 'hooks';
const BannerForth: FC<IStyleBox> = memo(
  ({ className, onClick, active, join }) => {
    const { marginLtr, dirRtl } = useDirection();

    return (
      <div
        className={join(
          ' grid grid-cols-2 w-full mx-auto cursor-pointer',
          className
        )}
        onClick={onClick}
        dir={dirRtl}
      >
        <div className={`grid grid-cols-1 ${marginLtr}-6px `}>
          <BlueBox className=" h-35px" number="1" active={active} join={join} />
          <BlueBox
            className=" h-35px mt-5px"
            number="3"
            active={active}
            join={join}
          />
        </div>
        <div className=" grid grid-cols-1 ">
          <BlueBox
            className="  h-35px"
            number="2"
            active={active}
            join={join}
          />
          <BlueBox
            className="h-35px mt-5px"
            number="4"
            active={active}
            join={join}
          />
        </div>
      </div>
    );
  }
);

export default BannerForth;
