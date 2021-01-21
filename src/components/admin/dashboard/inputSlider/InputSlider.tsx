import { useState, FC } from 'react';
import { IInputSlider } from './interface';
import { useClass } from 'hooks';
export const InputSlider: FC<IInputSlider> = ({
  title,
  unit,
  onChange,
  className,
  value,
}) => {
  // const [value, setValue] = useState('50');
  const { join } = useClass();
  return (
    <div
      className={join(`flex flex-col `, className)}
      style={{ direction: 'rtl' }}
    >
      <div className="flex justify-between  text-white text-14">
        <div>{title}</div>
        <div>
          {value}
          {unit}
        </div>
      </div>
      <input
        type="range"
        className="bg-blue-600"
        value={value}
        onChange={(e) => {
          // setValue(e.target.value);
          if (onChange) {
            onChange(e.target.value);
          }
        }}
      />
    </div>
  );
};
