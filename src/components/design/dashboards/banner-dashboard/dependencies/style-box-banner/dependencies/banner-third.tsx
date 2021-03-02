import { FC, memo } from 'react';
import { BlueBox } from './blue-box';
import { useDirection } from 'hooks';

const BannerThird: FC<IStyleBox> = memo(
  ({ className, onClick, active, join }) => {
    const { dirRtl } = useDirection();

    return (
      <div
        className={join(
          ' grid grid-cols-3 w-full mx-auto cursor-pointer',
          className
        )}
        onClick={onClick}
        dir={dirRtl}
      >
        <div className=" grid grid-cols-1  ">
          <BlueBox className=" h-35px" number="1" active={active} join={join} />
          <BlueBox
            className=" h-35px mt-5px"
            number="4"
            active={active}
            join={join}
          />
        </div>

        <div className=" grid grid-cols-1  mx-4px ">
          <BlueBox className=" h-35px" number="2" active={active} join={join} />
          <BlueBox
            className=" h-35px mt-5px"
            number="5"
            active={active}
            join={join}
          />
        </div>
        <div className=" grid grid-cols-1 ">
          <BlueBox
            className="  h-35px"
            number="3"
            active={active}
            join={join}
          />
          <BlueBox
            className=" h-35px mt-5px"
            number="6"
            active={active}
            join={join}
          />
        </div>
      </div>
    );
  }
);

export default BannerThird;
