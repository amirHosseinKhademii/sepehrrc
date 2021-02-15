import { useClass, useDirection } from 'hooks';
import { FC, memo } from 'react';
import { BlueBox } from './blue-box';

const BannerFirst: FC<IStyleBox> = memo(({ className, onClick, active }) => {
  const { join } = useClass();
  const { marginRtl, marginLtr, dirRtl } = useDirection();

  return (
    <div
      className={join(
        'grid grid-cols-3 w-full mx-auto cursor-pointer',
        className
      )}
      onClick={onClick}
      dir={dirRtl}
    >
      <div className=" col-span-2">
        <BlueBox className=" h-75px" number="1" active={active} join={join} />
      </div>
      <div className={`col-span-1 grid grid-cols-1 ${marginRtl}-6px`}>
        <BlueBox className=" h-35px" number="2" active={active} join={join} />
        <BlueBox
          className=" h-35px mt-5px"
          number="3"
          active={active}
          join={join}
        />
      </div>
    </div>
  );
});
export default BannerFirst;
