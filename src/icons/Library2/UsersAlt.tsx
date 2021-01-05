import { FC } from 'react';
import { IIcon } from '../interfaces';

export const ICUsersAlt: FC<IIcon> = ({
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
      <path data-name="Rectangle 24" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="users-alt"
        d="M12.42 12.577a4.92 4.92 0 001.7-3.72 5 5 0 00-10 0 4.92 4.92 0 001.7 3.72 8 8 0 00-4.7 7.28 1 1 0 102 0 6 6 0 1112 0 1 1 0 002 0 8 8 0 00-4.7-7.28zm-3.3-.72a3 3 0 113-3 3 3 0 01-3 3zm9.74.32a5 5 0 00-3.74-8.32 1 1 0 000 2 2.995 2.995 0 011.5 5.59 1 1 0 00-.05 1.7l.39.26.13.07a7 7 0 014 6.38 1 1 0 002 0 9 9 0 00-4.23-7.68z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
