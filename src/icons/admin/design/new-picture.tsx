import { FC } from 'react';

export const ICNewPicture: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '1em'}
      height={height ? height : '1em'}
      viewBox="0 0 16 16"
      className={className}
      onClick={onClick}
    >
      <path
        fill={fill ? fill : 'current'}
        d="M13.2 18H3.6A1.6 1.6 0 0 1 2 16.4V6.8h1.6v9.6h9.6zm3.2-3.2H6.8a1.6 1.6 0 0 1-1.6-1.6V3.6A1.6 1.6 0 0 1 6.8 2h9.6A1.6 1.6 0 0 1 18 3.6v9.6a1.6 1.6 0 0 1-1.6 1.6zM6.8 3.6v9.6h9.6V3.6zm5.6 8h-1.6V9.2H8.4V7.6h2.4V5.2h1.6v2.4h2.4v1.6h-2.4z"
        transform="translate(-2 -2)"
      />
    </svg>
  );
};
