import { FC } from 'react';
import { IInput } from './interface';

export const Input: FC<IInput> = ({ item, placeholder }) => {
  return (
    <input
      className={`placeholder-gray_shade-300 focus:outline-none rounded px-4  h-54px w-270px bg-gray_shade-500 text-white focus:ring-2 focus:ring-blue-500`}
      placeholder={placeholder}
      dir="rtl"
    />
  );
};
