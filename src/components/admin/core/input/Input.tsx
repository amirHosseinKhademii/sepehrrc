import { useClass } from 'hooks';
import { FC } from 'react';
import { IInput } from './interface';

export const Input: FC<IInput> = ({
  className,
  placeholder,
  label,
  onChange,
  onBlur,
  value,
}) => {
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
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className="w-full h-54px px-4 text-right rounded text-gray_shade-300 bg-gray_shade-500 placeholder-gray_shade-300 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
