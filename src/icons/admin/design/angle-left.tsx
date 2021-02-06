import { FC } from 'react';

export const ICAngelLeft: FC<IIcon> = ({
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
      <path data-name="Rectangle 29" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="angle-left"
        d="M11.913 12.675l3.54-3.54a1 1 0 10-1.42-1.41l-4.24 4.24a1 1 0 000 1.42l4.24 4.29a1 1 0 101.42-1.41z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
