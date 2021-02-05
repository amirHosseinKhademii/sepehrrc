import { FC } from 'react';
import { useClass } from 'hooks';

export const ProductImage: FC<IProductImage> = ({
  layout = true,
  className,
  onClick,
  src,
  style,
  cssAlt,
  toggle,
}) => {
  return (
    <img
      className={toggle('productImage', className, layout, cssAlt)}
      onClick={onClick}
      src={src}
      alt="عکس محصول"
      style={style}
    />
  );
};
