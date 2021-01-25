import { FC } from 'react';
import { IProductGrid } from './interfaces';
export const ProductGrid: FC<IProductGrid> = ({
  col = 4,
  row = 1,
  gap = 30,
  children,
}) => {
  return (
    <div
      className={`grid  
                 grid-cols-${col ? col : 4} grid-rows-${
        row ? row : 1
      } gap-${`${gap}px`}`}
    >
      {children}
    </div>
  );
};
