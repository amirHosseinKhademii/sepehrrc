import { IIcon } from 'icons/interfaces';
import { FC } from 'react';

export const ICEllipsisH: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '1em'}
      height={height ? height : '1em'}
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <path data-name="Rectangle 41" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="ellipsis-h"
        d="M12 9.57a2 2 0 102 2 2 2 0 00-2-2zm-7 0a2 2 0 102 2 2 2 0 00-2-2zm14 0a2 2 0 102 2 2 2 0 00-2-2z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
