import { useClass } from 'hooks';
import { FC } from 'react';
import { IText } from './interfaces';

export const Text: FC<IText> = ({ children, className, onClick }) => {
  const { join } = useClass();
  return (
    <p onClick={onClick} className={join('font-iransans', className)}>
      {children}
    </p>
  );
};
