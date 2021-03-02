import { FC } from 'react';
import { useClass } from 'hooks';

export const ICShoppingCart: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  const { join } = useClass();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      className={join('ic ic-shopping-cart', className)}
      onClick={onClick}
    >
      <path data-name="Rectangle 40" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="shopping-cart"
        d="M20.619 15.857h-14a1 1 0 010-2h10.44a3 3 0 002.91-2.27l1.65-6.49a.993.993 0 00-1-1.24H6.379a3 3 0 00-2.82-2h-.94a1 1 0 000 2h.94a1 1 0 011 .76l.06.48 1.73 6.76a3.003 3.003 0 10.27 6h.18a3 3 0 105.64 0h2.36a3 3 0 105.64 0h.18a1 1 0 000-2zm-1.28-10l-1.31 5.24a1 1 0 01-1 .76h-8.63l-1.5-6zm-9.72 14a1 1 0 111-1 1 1 0 01-1 1zm8 0a1 1 0 111-1 1 1 0 01-1 1z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
