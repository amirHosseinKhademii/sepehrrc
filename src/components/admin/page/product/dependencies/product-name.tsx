import { FC } from 'react';
import { IProductName } from '../interface';
import { useClass } from 'hooks';
export const ProductName: FC<IProductName> = ({
  layout = true,
  className,
  onClick,
  text,
  style,
}) => {
  const { toggle, join } = useClass();

  return (
    <div
      className={toggle('', className, layout)}
      onClick={onClick}
      style={style}
    >
      {text}
    </div>
  );
};
