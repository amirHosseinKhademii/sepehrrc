import { FC } from 'react';
interface IDropDown {
  children?: any;
  className?: string;
}
export const DropDown: FC<IDropDown> = ({ children, className }) => {
  return (
    <select
      className={`w-full py-18px pr-20px bg-gray_shade-800 rounded flex items-center text-gray_shade-300 ${className}`}
      style={{ direction: 'rtl' }}
    >
      {children}
    </select>
  );
};
