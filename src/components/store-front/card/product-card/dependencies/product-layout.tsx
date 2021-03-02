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
        'product-layout w-full p-40px h-500px flex flex-col justify-center  items-center cursor-pointer bg-white z-10 ',
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
