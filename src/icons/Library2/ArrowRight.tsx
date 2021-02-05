import { FC } from 'react';

export const ICArrowRight: FC<IIcon> = ({
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
        data-name="arrow-right"
        d="M17.487 12.054a1 1 0 00-.21-.33l-5-5a1.004 1.004 0 00-1.42 1.42l3.3 3.29h-7.59a1 1 0 000 2h7.59l-3.3 3.29a1.004 1.004 0 101.42 1.42l5-5a1.034 1.034 0 00.21-1.09z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
