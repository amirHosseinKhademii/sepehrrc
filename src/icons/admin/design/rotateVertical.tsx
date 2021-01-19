import { IIcon } from 'icons/interfaces';
import { FC } from 'react';

export const ICRotateVertical: FC<IIcon> = ({
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
          d="M4.94 12.24a1 1 0 0 0-1.21.76l-.49 1.94a1.011 1.011 0 0 0 1.97.45l.49-1.94a1 1 0 0 0-.76-1.21zm17 7.52l-4-16A1 1 0 0 0 17 3h-3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h7a1.031 1.031 0 0 0 1-1.24zM15 19V5h1.22l3.5 14zM6.4 6.42a1 1 0 0 0-1.22.73L4.7 9.09a1 1 0 0 0 .73 1.21h.24a1 1 0 0 0 1-.76l.48-1.94a1 1 0 0 0-.75-1.18zM7.51 5h2a1 1 0 1 0 0-2h-2a1 1 0 0 0 0 2zM4.24 19a1.007 1.007 0 1 0-2-.24l-.24 1A.993.993 0 0 0 3 21h1a1.007 1.007 0 0 0 .24-2zM10 6.51a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zm0 6a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm0 6a1 1 0 0 0-.86.49H8a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1v-.49a1 1 0 0 0-1-1z"
          transform="translate(.233) translate(-.204)"
        />
      </g>
    </svg>
  );
};