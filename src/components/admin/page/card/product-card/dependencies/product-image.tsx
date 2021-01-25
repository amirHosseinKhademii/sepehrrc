import { FC } from 'react';
import { IProductImage } from '../interfaces';
import { useClass } from 'hooks';
export const ProductImage: FC<IProductImage> = ({
  layout = true,
  className,
  onClick,
  src,
  style,
}) => {
  const { toggle } = useClass();
  return (
    <img
      className={toggle('', className, layout)}
      onClick={onClick}
      src={src}
      alt="عکس محصول"
      style={style}
    />
  );
};
