import { FC } from 'react';
import { IProductCard, IProductPrice } from '../interface';
import { useClass } from 'hooks';
export const ProductPrice: FC<IProductPrice> = ({
  layout = true,
  className,
  onClick,
  style,
  unitClassName,
  unit = 'تومان',
  prev,
  withUnit,
  text,
}) => {
  const { toggle, join } = useClass();

  return (
    <div
      className={toggle(`${prev ? 'line-through' : ''}`, className, layout)}
      onClick={onClick}
      style={style}
    >
      {text}
      {withUnit && (
        <span className={toggle('', unitClassName, layout)}>{unit}</span>
      )}
    </div>
  );
};
