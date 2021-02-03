import { FC } from 'react';

export const ICEditSettings: FC<IIcon> = ({ className, onClick, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
    >
      <g>
        <path
          fill="none"
          d="M0 0H20V20H0z"
          transform="translate(-.374) translate(.374)"
        />
        <path
          fill={fill ? fill : '#9ba3b5'}
          d="M4.4 14.8h3.392a.8.8 0 0 0 .568-.232l5.54-5.545L16.168 6.8a.8.8 0 0 0 0-1.136l-3.392-3.433a.8.8 0 0 0-1.136 0L9.384 4.5l-5.552 5.539a.8.8 0 0 0-.232.568V14a.8.8 0 0 0 .8.8zm7.808-10.873l2.264 2.264-1.136 1.136-2.264-2.264zM5.2 10.935l4.744-4.744 2.264 2.264L7.464 13.2H5.2zm12 5.464H2.8a.8.8 0 0 0 0 1.6h14.4a.8.8 0 0 0 0-1.6z"
          transform="translate(-.374) translate(.486 -.424)"
        />
      </g>
    </svg>
  );
};
