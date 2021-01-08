import { useClass } from 'hooks';
import { FC } from 'react';
import { ICheckbox } from './interfaces';

export const CheckBox: FC<ICheckbox> = ({ className, label }) => {
  const { join } = useClass();
  return (
    <div className={join('flex items-center justify-end', className)}>
      <span className="text-14px text-gray_shade-300 mr-2">{label}</span>
      <input type="checkbox" />
    </div>
  );
};
