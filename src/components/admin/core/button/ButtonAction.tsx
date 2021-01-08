import { useClass } from 'hooks';
import { FC } from 'react';
import { Button } from './Button';
import { IButton } from './interfaces';

export const ButtonAction: FC<IButton> = ({ onClick, className, text }) => {
  const { join } = useClass();
  return (
    <Button
      className={join('w-130px h-50px text-14px ', className)}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
