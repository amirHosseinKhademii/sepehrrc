import { FC } from 'react';

export const ICMenu: FC<IIcon> = ({
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
      <g>
        <path
          fill="none"
          d="M0 0H24V24H0z"
          transform="translate(.09) translate(-.09)"
        />
        <path
          fill={fill ? fill : 'current'}
          d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"
          transform="translate(.09) translate(-.091 -.143)"
        />
      </g>
    </svg>
  );
};
