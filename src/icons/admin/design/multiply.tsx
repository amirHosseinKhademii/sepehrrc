import { FC } from 'react';

export const ICMultiply: FC<IIcon> = ({
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
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <path
        fill={fill ? fill : 'current'}
        d="M13.41 12l6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1 1 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 1 0 1.42 1.42l6.29-6.3 6.29 6.3a1 1 0 1 0 1.42-1.42z"
        transform="translate(.141 -.139)"
      />
    </svg>
  );
};
