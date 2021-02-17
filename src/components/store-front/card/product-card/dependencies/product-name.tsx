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
      className={toggle(
        'productName text-center ',
        className,
        layout,
        'font-bold mt-80px '
      )}
      onClick={onClick}
      style={style}
    >
      {layout ? text : 'عنوان محصول در اینجا'}
    </div>
  );
};
