import { FC } from 'react';

export const ICLinkH: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <path data-name="Rectangle 37" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="link-h"
        d="M7.99 12.143a1 1 0 001 1h6a1 1 0 000-2h-6a1 1 0 00-1 1zm2 3h-3a3 3 0 010-6h3a1 1 0 000-2h-3a5 5 0 000 10h3a1 1 0 000-2zm7-8h-3a1 1 0 000 2h3a3 3 0 010 6h-3a1 1 0 000 2h3a5 5 0 000-10z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
