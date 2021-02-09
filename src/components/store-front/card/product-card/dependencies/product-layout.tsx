import { FC } from 'react';
import { useClass } from 'hooks';

export const ProductLayout: FC<IProductLayout> = ({
  layout = true,
  className,
  onClick,
  children,
  style,
  cssAlt,
  toggle,
}) => {
  return (
    <div
      className={toggle(
        'productLayout w-full flex flex-col justify-center  items-center cursor-pointer',
        className,
        layout,
        cssAlt
      )}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};
