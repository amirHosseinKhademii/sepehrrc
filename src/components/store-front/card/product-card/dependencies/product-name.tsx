import { FC } from 'react';
import { useClass } from 'hooks';

export const ProductName: FC<IProductName> = ({
  layout = true,
  className,
  onClick,
  text,
  style,
  toggle,
  cssAlt,
}) => {
  return (
    <div
      className={toggle('productName ', className, layout, cssAlt)}
      onClick={onClick}
      style={style}
    >
      {text}
    </div>
  );
};
