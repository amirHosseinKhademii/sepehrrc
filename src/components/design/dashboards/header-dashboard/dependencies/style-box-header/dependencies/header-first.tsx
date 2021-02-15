import { useClass, useDirection } from 'hooks';
import { FC } from 'react';
import { BlueBox } from './blue-box';

export const HeaderFirst: FC<IStyleBoxHeader> = ({
  className,
  onClick,
  active,
}) => {
  const { toggle, join } = useClass();
  const { marginRtl, flexDirection } = useDirection();

  return (
    <div
      className={toggle(
        join(
          ` flex ${flexDirection} items-center w-full h-27px  rounded-2px mx-auto px-9px  cursor-pointer transition-all duration-200`,
          className
        ),
        'bg-primary-700 ',
        active,
        'bg-gray-800 hover:bg-primary-700 '
      )}
      onClick={onClick}
    >
      <BlueBox
        active={active}
        toggle={toggle}
        className="w-30px h-9px  rounded-7px"
      />
      <BlueBox
        active={active}
        toggle={toggle}
        className={` w-80px h-9px ${marginRtl}-5px rounded-5px`}
      />
      <BlueBox
        active={active}
        toggle={toggle}
        className={`w-30px h-9px ${marginRtl}-75px rounded-7px`}
      />
    </div>
  );
};
