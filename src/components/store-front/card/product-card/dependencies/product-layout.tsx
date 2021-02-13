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
        'productLayout flex flex-col  items-center h-450px py-40px cursor-pointer bg-white',
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
