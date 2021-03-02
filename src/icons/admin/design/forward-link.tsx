import { FC } from 'react';

export const ICForwardLink: FC<IIcon> = ({
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
      viewBox="0 0 12 12"
      className={className}
      onClick={onClick}
    >
      <path
        fill={fill ? fill : 'current'}
        d="M13.751 16H5.5A1.5 1.5 0 0 1 4 14.5V6.25a1.5 1.5 0 0 1 1.5-1.5h3v1.5h-3v8.25h8.25v-3h1.5v3a1.5 1.5 0 0 1-1.499 1.5zm-3.975-4.72l-1.058-1.06 4.72-4.72h-2.687V4H16v5.25h-1.5V6.561z"
        transform="translate(-4.001 -4)"
      />
    </svg>
  );
};
