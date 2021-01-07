import { useClass } from 'hooks';
import { FC } from 'react';
import { IInput } from './interface';

export const Input: FC<IInput> = ({ className, placeholder, label }) => {
  const { join } = useClass();

  return (
    <div className={join('w-full flex flex-col items-end', className)}>
      {label && (
        <label
          htmlFor={label}
          className="mb-14px text-14px text-white_shade-100"
        >
          {label}
        </label>
      )}
      <input
        id={label}
        placeholder={placeholder}
        className="w-full h-54px px-4 text-right rounded text-gray_shade-300 bg-gray_shade-500 placeholder-gray_shade-300 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );

  return (
    <input
      className={`placeholder-gray_shade-300 focus:outline-none rounded px-4  h-54px w-270px bg-gray_shade-500 text-white focus:ring-2 focus:ring-blue-500`}
      placeholder={placeholder}
      dir="rtl"
    />
  );
};
