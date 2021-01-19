import { useState } from 'react';

export const InputSlider = ({ title }) => {
  const [value, setValue] = useState('50');
  return (
    <div
      className="flex flex-col  mx-40px w-378px"
      style={{ direction: 'rtl' }}
    >
      <div className="flex justify-between  mb-15px text-white">
        <div>{title}</div>
        <div> {value}%</div>
      </div>
      <input
        type="range"
        className="bg-blue-600"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
