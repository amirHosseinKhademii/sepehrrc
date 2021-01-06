import { useRef } from 'react';
import { FC } from 'react';
import { IInput } from './interface';
import { ICLinkH } from 'icons';

export const InputIcon: FC<IInput> = ({ item, placeholder }) => {
  const testRef = useRef(null);
  return (
    <div ref={testRef} className="relative h-54px w-270px  rounded">
      <input
        className={`placeholder-gray_shade-300 rounded focus:outline-none h-full pl-4 pr-12 w-full bg-gray_shade-500 text-white focus:ring-2 focus:ring-blue-500`}
        placeholder={placeholder}
        dir="rtl"
      />
      <div className="absolute inset-y-0 right-4 flex items-center justify-end">
        <ICLinkH fill="#9ba3b5" />
      </div>
    </div>
  );
};
