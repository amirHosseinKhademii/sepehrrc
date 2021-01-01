import { FC } from 'react';
import { IButton } from './interfaces';

export const Button: FC<IButton> = ({ className, children }) => {
  return (
    <button
      className={`rounded flex items-center justify-center text-white_shade-100 ${className}`}
    >
      {children}
    </button>
  );
};
