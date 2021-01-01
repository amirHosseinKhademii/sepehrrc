import { FC } from 'react';
import { IIcon } from './interfaces';

export const ICMultiply: FC<IIcon> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <path
        fill="#fff"
        d="M13.41 12l6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1 1 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 1 0 1.42 1.42l6.29-6.3 6.29 6.3a1 1 0 1 0 1.42-1.42z"
        transform="translate(.141 -.139)"
      />
    </svg>
  );
};
