import { useClass } from 'hooks';
import { FC } from 'react';

export const Text: FC<IText> = ({ children, className, onClick }) => {
  const { join } = useClass();
  return (
    <p onClick={onClick} className={className}>
      {children}
    </p>
  );
};
