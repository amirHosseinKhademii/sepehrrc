import { FC } from 'react';

export const ProductGroupLayout: FC<IProductLayout> = ({
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
        'product-group-layout  h-294px flex flex-col justify-center items-center bg-white',
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
