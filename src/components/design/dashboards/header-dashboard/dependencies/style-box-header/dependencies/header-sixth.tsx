import { FC } from 'react';
import { BlueBox } from './blue-box';
import { useDirection } from 'hooks';
const HeaderSixth: FC<IStyleBoxHeader> = ({
  className,
  onClick,
  active = false,
  toggle,
  join,
}) => {
  const { marginRtl, flexDirection } = useDirection();

  return (
    <div
      className={toggle(
        join(
          ' flex flex-col items-center w-full h-40px  rounded-2px mx-auto   cursor-pointer ',
          className
        ),
        'bg-primary-700',
        active,
        'bg-gray-800 '
      )}
      onClick={onClick}
    >
      <div
        className={toggle(
          `flex ${flexDirection} items-center h-27px w-full px-9px transition-all duration-200`,
          'bg-primary-700 ',
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
          className={`w-80px h-9px ${marginRtl}-5px rounded-5px`}
        />
        <BlueBox
          active={active}
          toggle={toggle}
          className={`w-9px h-9px ${marginRtl}-61px rounded-full`}
        />
        <BlueBox
          active={active}
          toggle={toggle}
          className={`w-30px h-9px ${marginRtl}-5px rounded-7px`}
        />
      </div>
      <BlueBox
        active={active}
        toggle={toggle}
        className="w-full h-13px "
      ></BlueBox>
    </div>
  );
};
export default HeaderSixth;
