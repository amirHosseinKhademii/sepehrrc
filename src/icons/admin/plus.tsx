import { FC } from 'react';
import { IIcon } from './interfaces';

export const ICPlus: FC<IIcon> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g>
        <path
          fill="none"
          d="M0 0H24V24H0z"
          transform="translate(.207) translate(-.207)"
        />
        <path
          fill="#9ba3b5"
          d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"
          transform="translate(.207) translate(0 -.143)"
        />
      </g>
    </svg>
  );
};
