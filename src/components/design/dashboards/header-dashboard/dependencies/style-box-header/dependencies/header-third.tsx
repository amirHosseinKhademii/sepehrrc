import { FC } from 'react';
import { BlueBox } from './blue-box';

export const HeaderThird: FC<IStyleBoxHeader> = ({
  className,
  onClick,
  active = false,
  toggle,
  join,
}) => (
  <div
    className={toggle(
      join(
        ' flex flex-col items-center w-full h-40px  rounded-2px mx-auto   cursor-pointer transition-all duration-200',
        className
      ),
      'bg-primary-700',
      active,
      'bg-gray-800 '
    )}
    onClick={onClick}
    style={{ direction: 'rtl' }}
  >
    <div
      className={toggle(
        'flex items-center h-27px w-full px-9px',
        'bg-primary-700',
        active,
        'bg-gray-800 hover:bg-primary-700'
      )}
    >
      <BlueBox
        active={active}
        toggle={toggle}
        className="w-30px h-9px  rounded-7px"
      />
      <BlueBox
        active={active}
        toggle={toggle}
        className="w-80px h-9px mr-40px rounded-5px"
      />
      <BlueBox
        active={active}
        toggle={toggle}
        className="w-30px h-9px mr-40px rounded-7px"
      />
    </div>
    <BlueBox
      active={active}
      toggle={toggle}
      className="w-full h-13px "
    ></BlueBox>
  </div>
);