import { FC } from 'react';

export const ICWarning: FC<IIcon> = ({ className }) => {
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
          transform="translate(-.19) translate(.19)"
        />
        <path
          fill="#de4437"
          d="M12 16a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm10.67 1.47l-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53zm-1.73 2a1 1 0 0 1-.88.51H3.94a1.01 1.01 0 0 1-.88-1.51l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02zM12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"
          transform="translate(-.19) translate(.221 .211)"
        />
      </g>
    </svg>
  );
};
