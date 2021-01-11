import { useClass } from 'hooks';
import { FC } from 'react';
import { ICheckbox } from './interfaces';

export const CheckBox: FC<ICheckbox> = ({
  className,
  label,
  onChange,
  checked,
}) => {
  const { join } = useClass();
  return (
    <div className={join('flex items-center justify-end', className)}>
      <span className="text-14px text-gray_shade-300 mr-2">{label}</span>
      <input
        type="checkbox"
        onChange={onChange}
        className="h-18px w-18px border border-gray_shade-500 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
        checked={checked}
      />
    </div>
  );
};
