import { FC } from 'react';

interface IButton {
  item?: any;
  page?: boolean;
}

export const Button: FC<IButton> = ({ item, page = false }) => {
  return (
    <button
      className={` mx-auto rounded p-4 ${item.className} ${
        page ? 'w-1/4' : 'w-full'
      }`}
    >
      {item.name}
    </button>
  );
};
