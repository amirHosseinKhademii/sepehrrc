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
        data-name="search"
        d="M21.721 20.741l-3.71-3.68a9 9 0 10-1.39 1.39l3.68 3.68a.994.994 0 101.42-1.39zm-10.71-2.29a7 7 0 117-7 7 7 0 01-7 7z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
