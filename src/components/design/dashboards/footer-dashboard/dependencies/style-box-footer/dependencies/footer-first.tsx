import { useClass } from 'hooks';
import { FC, memo } from 'react';
import { BlueBox } from './blue-box';

const BannerFirst: FC<IStyleBox> = memo(({ className, onClick, active }) => {
  const { join } = useClass();
  return (
    <div
      className={join(
        'grid grid-cols-3 w-full mx-auto cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className=" col-span-1 grid grid-cols-1 mr-6px">
        <BlueBox className=" h-35px"  active={active} join={join} />
        <BlueBox
          className=" h-35px mt-5px"
          
          active={active}
          join={join}
        />
      </div>
      <div className=" col-span-2">
        <BlueBox className=" h-75px"  active={active} join={join} />
      </div>
    </div>
  );
});
export default BannerFirst;
