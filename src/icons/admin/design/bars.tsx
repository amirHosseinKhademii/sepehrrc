import { FC } from 'react';

export const ICBars: FC<IIcon> = ({
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
      <path data-name="Rectangle 37" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="bars"
        d="M2.999 7.857h18a1 1 0 000-2h-18a1 1 0 000 2zm18 8h-18a1 1 0 000 2h18a1 1 0 000-2zm0-5h-18a1 1 0 000 2h18a1 1 0 000-2z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
