import { FC } from 'react';
import { IProductCard } from './interfaces';
import { useClass } from 'hooks';
export const ProductCard: FC<IProductCard> = ({
  layout = true,
  className,
  onClick,
  children,
  style,
}) => {
  const { toggle } = useClass();

  return (
    <div
      className={toggle('flex flex-col  items-center', className, layout)}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};
