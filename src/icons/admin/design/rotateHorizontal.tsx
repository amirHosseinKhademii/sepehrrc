import { IIcon } from 'icons/interfaces';
import { FC } from 'react';

export const ICRotateHorizontal: FC<IIcon> = ({
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
      <g>
        <path
          fill="none"
          d="M0 0H24V24H0z"
          transform="translate(.233) translate(-.233)"
        />
        <path
          fill={fill ? fill : 'current'}
          d="M13.21 5.7a1 1 0 0 0 .24 0l1.94-.49a1 1 0 1 0-.48-1.94L13 3.73a1.007 1.007 0 0 0 .24 2zM9.51 9h-2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm4 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM7.39 7.15h.24l1.94-.48a1.014 1.014 0 1 0-.48-1.97l-1.94.48a1.007 1.007 0 0 0 .24 2zM4 10.51a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm16.62-8.3a1 1 0 0 0-.86-.21l-1 .24a1 1 0 0 0 .27 1.97A1 1 0 0 0 21 4V3a1 1 0 0 0-.38-.79zM20 7a1 1 0 0 0-1 1v1.14a1 1 0 0 0 .51 1.86H20a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm0 6H4a1 1 0 0 0-1 1v3a1 1 0 0 0 .76 1l16 4A1.126 1.126 0 0 0 21 21v-7a1 1 0 0 0-1-1zm-1 6.72l-14-3.5V15h14z"
          transform="translate(.233) translate(-.233 .024)"
        />
      </g>
    </svg>
  );
};
