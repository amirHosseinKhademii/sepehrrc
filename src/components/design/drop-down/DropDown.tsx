import { FC, Fragment, useState } from 'react';
import { useClass, useDirection } from 'hooks';
import { ICAngleDown, ICAngelUp } from 'icons';
export const DropDown: FC<IDropDown> = ({
  className,
  options,
  onSelect,
  defaultValue,
  selected,
  height = '54px',
}) => {
  const {
    textAlignRtl,
    rightTL,
    paddingRtl,
    paddingLtr,
    flexDirection,
  } = useDirection();

  const { join, toggle } = useClass();
  const [drop, setDrop] = useState({
    open: false,
    selected: { title: defaultValue, id: '' },
  });

  const current =
    options && selected
      ? options.find((option) => option.id == selected)?.title
      : '';

  const DefaultBox = () => (
    <div
      className={join(
        `focus:outline-none  w-full flex ${flexDirection} items-center justify-between h-${height} ${paddingRtl}-20px cursor-pointer bg-gray_shade-800 text-gray_shade-300 ${
          drop.open
            ? 'border-primary-700 border-r-2 border-l-2 border-t-2 rounded-t'
            : 'border-b  border-gray_shade-900 rounded'
        }`,
        className
      )}
      onClick={() => setDrop((prev) => ({ ...prev, open: !prev.open }))}
    >
      <span className=" text-14px text-gray_shade-300 ">{current}</span>
      <div className="flex items-center justify-center h-full w-50px border-r  border-gray_shade-900 text-24px">
        {drop.open ? <ICAngelUp /> : <ICAngleDown className="fill-current" />}
      </div>
    </div>
  );

  const DropBox = () => (
    <div
      className={`w-full h-auto flex flex-col items-end z-50 pt-18px bg-gray_shade-800 absolute top-1px ${rightTL}-0 mt-${height} border-b-2 border-r-2 border-l-2 border-primary-700 rounded-b`}
    >
      {options.map((option, index) => (
        <p
          className={`w-full pb-18px ${paddingRtl}-20px ${textAlignRtl} cursor-pointer text-gray_shade-300 text-14px hover:text-white`}
          key={index}
          onClick={() => {
            setDrop((prev) => ({
              ...prev,
              selected: option,
              open: false,
            }));
            onSelect(option.id);
          }}
        >
          {option.title}
        </p>
      ))}
    </div>
  );

  const BackDrop = () => (
    <div
      className="absolute inset-0 opacity-0 z-0"
      onClick={() => setDrop((prev) => ({ ...prev, open: false }))}
    ></div>
  );

  return (
    <Fragment>
      <div
        className={toggle(
          `flex flex-col w-full relative`,
          ' border-b border-gray_shade-900',
          drop.open
        )}
      >
        <DefaultBox />
        {drop.open && <DropBox />}
      </div>
      {drop.open && <BackDrop />}
    </Fragment>
  );
};
