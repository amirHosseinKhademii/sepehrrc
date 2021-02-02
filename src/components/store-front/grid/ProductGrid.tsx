import { FC } from 'react';
export const ProductGrid: FC<IProductGrid> = ({
  col = 4,
  row = 1,
  gap = 30,
  children,
}) => {
  return (
    <div
      className={`grid
             xs:grid-cols-1  md:grid-cols-2   lg:grid-cols-${
               col ? col : 4
             }  gap-${`${gap}px`}
      
      `}
      dir="rtl"
    >
      {children}
    </div>
  );
};
