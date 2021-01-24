import { FC } from 'react';
import { IIcon } from '../../interfaces';

export const ICCropAlt: FC<IIcon> = ({
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
        id="crop-alt"
        d="M19,16H18V7a1,1,0,0,0-1-1H8V5A1,1,0,0,0,6,5V6H5A1,1,0,0,0,5,8H6v9a1,1,0,0,0,1,1h9v1a1,1,0,0,0,2,0V18h1a1,1,0,0,0,0-2Zm-3,0H8V8h8Z"
        transform="translate(-4 -4)"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
