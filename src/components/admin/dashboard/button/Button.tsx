import { useClass } from 'hooks';
import { FC } from 'react';
import { IButton } from './interfaces';

export const Button: FC<IButton> = ({ className, children, onClick }) => {
  const { join } = useClass();
  return (
    <button
      className={join(
        'focus:outline-none rounded flex items-center justify-center text-white_shade-100',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
