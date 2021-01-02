import { FC } from 'react';
import { IButton } from './interfaces';

export const ButtonIcon: FC<IButton> = ({ className, children, onClick }) => {
  return (
    <button className={`cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};