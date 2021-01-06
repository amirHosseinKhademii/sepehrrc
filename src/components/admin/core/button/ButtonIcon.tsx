import { useClass } from 'hooks';
import { FC } from 'react';
import { IButton } from './interfaces';

export const ButtonIcon: FC<IButton> = ({ className, children, onClick }) => {
  const { join } = useClass();
  return (
    <button
      className={join('focus:outline-none cursor-pointer', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
