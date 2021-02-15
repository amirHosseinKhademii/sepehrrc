import { useClass } from 'hooks';
import { ICheck } from 'icons';
import { FC } from 'react';

export const CheckBox: FC<ICheckbox> = ({
  className,
  label,
  checked,
  onClick,
  disabled,
  secondary,
}) => {
  const { join } = useClass();
  return (
    <div
      className={join(
        `flex items-center justify-end ${disabled && 'opacity-30'}`,
        className
      )}
    >
      <span className="text-14px text-gray_shade-300 mr-2">{label}</span>
      {disabled ? (
        <div className="w-18px h-18px rounded bg-gray_shade-800 cursor-pointer" />
      ) : checked ? (
        <div
          className={`w-18px h-18px rounded cursor-pointer flex justify-center items-center ${
            secondary ? 'bg-gray_shade-600' : 'bg-primary-700'
          }`}
          onClick={onClick}
        >
          <ICheck />
        </div>
      ) : (
        <div
          className="w-18px h-18px rounded bg-gray_shade-800 cursor-pointer"
          onClick={onClick}
        />
      )}
    </div>
  );
};
