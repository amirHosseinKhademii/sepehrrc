import { useClass } from 'hooks';
import { FC, Fragment } from 'react';
import { IInput } from './interface';
import { ICLinkH } from 'icons';

export const Input: FC<IInput> = ({
  className,
  placeholder,
  label,
  onChange,
  onBlur,
  value,
  variant,
}) => {
  const { join } = useClass();

  return (
    <div className="w-full">
      {variant === 'input' ? (
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
            className="focus:outline-none w-full h-54px px-4 text-right rounded text-gray_shade-300 bg-gray_shade-800 placeholder-gray_shade-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ) : variant === 'inputIcon' ? (
        <div className={join('relative h-54px w-full rounded', className)}>
          <input
            className={`placeholder-gray_shade-300 text-right rounded focus:outline-none h-full pl-4 pr-12 w-full bg-gray_shade-800 text-white focus:ring-2 focus:ring-blue-500`}
            placeholder={placeholder}
          />
          <div className="absolute inset-y-0 right-4 flex items-center ">
            <ICLinkH fill="#9ba3b5" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
