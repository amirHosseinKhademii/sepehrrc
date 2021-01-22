import { useClass } from 'hooks';
import { FC } from 'react';
import { IText } from './interfaces';

export const Text: FC<IText> = ({ children, className }) => {
  const { join } = useClass();
  return <p className={join('font-iransans', className)}>{children}</p>;
};
