import { IIcon } from 'icons/interfaces';
import { FC } from 'react';

export const ICPlus: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 16}
      height={height ? height : 16}
      viewBox="0 0 16 16"
      className={className}
      onClick={onClick}
    >
      <path
        d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"
        transform="translate(-4 -4)"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
