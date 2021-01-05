import { FC } from 'react';
import { IIcon } from '../interfaces';

export const ICArrowDown: FC<IIcon> = ({
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
      <path data-name="Rectangle 36" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="arrow-down"
        d="M17.849 11.72a1 1 0 00-1.42 0l-3.29 3.3V7.43a1 1 0 00-2 0v7.59l-3.29-3.3a1.004 1.004 0 00-1.42 1.42l5 5a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l5-5a1 1 0 000-1.42z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
