import { FC } from 'react';
import { ICheckBox } from './interface';

export const CheckBox: FC<ICheckBox> = ({ label }) => {
  return (
    <div className="m-10 flex flex-row-reverse items-center">
      <input
        type="checkbox"
        className="h-5 w-5 bg-red-500 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
        style={{ backgroundColor: '#414655' }}
      />
      <span className="text-gray-900 font-medium">{label}</span>
    </div>
  );
};
