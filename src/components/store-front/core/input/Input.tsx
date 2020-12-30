import { FC } from 'react';

interface IInput {
  item?: any;
  page?: boolean;
}
export const Input: FC<IInput> = ({ item, page = false }) => {
  return (
    <input
      className={`rounded border p-3 my-2 ${page ? 'w-1/4' : 'w-full'} ${
        item.className
      }`}
      placeholder={item.placeholder}
    />
  );
};
