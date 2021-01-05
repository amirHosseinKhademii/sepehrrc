import { FC, useState, useEffect } from 'react';

import { ICArrowDown, ICArrowUp } from '../../../../icons/Library2';

interface IDrop {
  children?: any;
  className?: string;
  options: string[];
}

export const Drop: FC<IDrop> = ({ children, className, options }) => {
  const [value, setValue] = useState(options[0]);
  const [selected, setSelected] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={`custom-select w-full bg-gray_shade-800 text-gray_shade-300 rounded-md ${
        showMenu && 'rounded-b-none'
      } shadow-custom-1 `}
      style={{ direction: 'rtl' }}
    >
      <div
        className="DropDown relative flex justify-between"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div className="h-50px flex items-center flex-row-reverse pr-20px ">
          {value}
        </div>
        {showMenu ? (
          <ICArrowUp
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            fill="#fff"
            className="my-auto ml-2"
          />
        ) : (
          <ICArrowDown
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            fill="#fff"
            className="my-auto ml-2"
          />
        )}
        <ul
          className={` absolute top-full right-0 ${
            showMenu
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          } transition-all duration-500 z-50 w-full rounded-b-md  `}
        >
          {options.map((item, index) => (
            <li
              className={`text-left  pr-20px  hover:bg-white hover:text-gray_shade-800 transition h-50px flex  items-center
                 ${
                   selected === index
                     ? 'bg-white text-gray_shade-800'
                     : 'bg-gray_shade-800'
                 }`}
              key={index}
              onClick={() => {
                setValue(item);
                setSelected(index);
                setShowMenu(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
