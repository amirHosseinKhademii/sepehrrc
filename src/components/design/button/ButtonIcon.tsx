import { useClass } from 'hooks';
import { FC } from 'react';

export const ButtonIcon: FC<IButton> = ({
  className,
  children,
  onClick,
  onClickCapture,
}) => {
  const { join } = useClass();
  return (
    <button
      className={join('focus:outline-none cursor-pointer', className)}
      onClick={onClick}
      onClickCapture={onClickCapture}
    >
      {children}
    </button>
  );
};
