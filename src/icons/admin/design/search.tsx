import { IIcon } from 'icons/interfaces';
import { FC } from 'react';


export const ICSearch: FC<IIcon> = ({
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
      <path data-name="Rectangle 37" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="arrow-up"
        d="M17.714 11.715l-5-5a1.034 1.034 0 00-1.42 0l-5 5a1.004 1.004 0 001.42 1.42l3.29-3.3v7.59a1 1 0 002 0v-7.59l3.29 3.3a1.004 1.004 0 101.42-1.42z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
