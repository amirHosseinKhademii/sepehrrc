import { IIcon } from 'icons/interfaces';
import { FC } from 'react';

export const ICLink: FC<IIcon> = ({ width, height, className, onClick }) => {
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
          transform="translate(-.101) translate(.101)"
        />
        <path
          fill="#717b93"
          d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1zm2 3H7a3 3 0 0 1 0-6h3a1 1 0 0 0 0-2H7a5 5 0 0 0 0 10h3a1 1 0 0 0 0-2zm7-8h-3a1 1 0 0 0 0 2h3a3 3 0 0 1 0 6h-3a1 1 0 0 0 0 2h3a5 5 0 0 0 0-10z"
          transform="translate(-.101) translate(.091 .143)"
        />
      </g>
    </svg>
  );
};
