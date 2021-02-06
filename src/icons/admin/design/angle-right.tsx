import { FC } from 'react';

export const ICAngelRight: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 58}
      height={height ? height : 58}
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <path data-name="Rectangle 30" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="angle-right"
        d="M14.949 11.965l-4.24-4.24a1 1 0 00-1.42 1.41l3.54 3.54-3.54 3.54a1 1 0 001.42 1.41l4.24-4.24a1 1 0 000-1.42z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
