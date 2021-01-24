import { FC } from 'react';
import { IIcon } from '../../interfaces';

export const ICSliderBtnOne: FC<IIcon> = ({
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
      <rect
        id="Rectangle_41"
        data-name="Rectangle 41"
        width="24"
        height="24"
        fill="none"
      />
      <path
        id="ellipsis-h-2"
        data-name="ellipsis-h"
        d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"
        transform="translate(0 -0.43)"
        fill={fill ? fill : '#9ba3b5'}
      />
    </svg>
  );
};
