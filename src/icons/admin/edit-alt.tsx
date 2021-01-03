import { FC } from 'react';
import { IIcon } from './interfaces';

export const ICEditAlt: FC<IIcon> = ({ className }) => {
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
          transform="translate(-.498) translate(.498)"
        />
        <path
          fill="current"
          d="M2.5 10.56l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 0-1.73l-9-5.2a1 1 0 0 0-1 0l-9 5.2a1 1 0 0 0 0 1.73zM12 5.65l7 4-7 4.05-7-4.01zm8.5 7.79L12 18.35l-8.5-4.91a1 1 0 1 0-1 1.73l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 1 0-1-1.73z"
          transform="translate(-.498) translate(.004 -.496)"
        />
      </g>
    </svg>
  );
};
