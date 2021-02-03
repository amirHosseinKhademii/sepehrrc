import { FC, useState } from 'react';
import { useClass } from 'hooks';
import { ICAngleDown, ICAngelUp } from 'icons';

export const DropDown: FC<IDropDown> = ({
  className,
  options,
  onSelect,
  defaultValue,
  selected,
  height = '54px',
}) => {
  const { join, toggle } = useClass();
  const [drop, setDrop] = useState({
    open: false,
    selected: { title: defaultValue, id: '' },
  });

  const current =
    options && selected
      ? options.find((option) => option.id == selected).title
      : '';

  return (
    <div
      className={toggle(
        'flex flex-col w-full relative',
        ' border-b border-gray_shade-900',
        drop.open
      )}
    >
      <div
        className={join(
          `focus:outline-none  w-full flex items-center justify-between h-${height} pr-20px cursor-pointer bg-gray_shade-800 rounded-t  text-gray_shade-300 ${
            drop.open
              ? 'border-primary-700 border-r-2 border-l-2 border-t-2'
              : 'border-b  border-gray_shade-900'
          }`,
          className
        )}
        onClick={() => setDrop((prev) => ({ ...prev, open: !prev.open }))}
      >
        <div className="flex items-center justify-center h-full w-50px border-r  border-gray_shade-900 text-24px">
          {drop.open ? <ICAngelUp /> : <ICAngleDown className="fill-current" />}
        </div>
        <span className=" text-14px text-gray_shade-300 ">{current}</span>
      </div>
      {drop.open && (
        <div
          className={`w-full h-auto flex flex-col items-end z-50 pt-18px bg-gray_shade-800 absolute top-1px right-0 mt-${height} border-b-2 border-r-2 border-l-2 border-primary-700 rounded-b`}
        >
          {options.map((option, index) => (
            <p
              className="w-full pb-18px pr-20px text-right cursor-pointer text-gray_shade-300 text-14px hover:text-white"
              key={index}
              onClick={() => {
                setDrop((prev) => ({ ...prev, selected: option, open: false }));
                onSelect(option.id);
              }}
            >
              {option.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
