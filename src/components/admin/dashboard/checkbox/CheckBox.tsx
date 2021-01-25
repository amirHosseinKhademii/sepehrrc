import { useClass } from 'hooks';
import { FC } from 'react';
import { ICheckbox } from './interfaces';

export const CheckBox: FC<ICheckbox> = ({
  className,
  label,
  checked,
  onClick,
  disabled,
}) => {
  const { join } = useClass();
  return (
    <div className={join('flex items-center justify-end', className)}>
      <span className="text-14px text-gray_shade-300 mr-2">{label}</span>
      {disabled ? (
        <div className="w-18px h-18px rounded bg-gray_shade-800 cursor-pointer opacity-50" />
      ) : checked ? (
        <div
          className="w-18px h-18px rounded bg-primary-700 cursor-pointer"
          onClick={onClick}
        />
      ) : (
        <div
          className="w-18px h-18px rounded bg-gray_shade-800 cursor-pointer"
          onClick={onClick}
        />
      )}
    </div>
  );
};
