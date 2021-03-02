import { FC } from 'react';

export const ICImagePlaceholder: FC<IIcon> = ({
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
      viewBox="0 0 18 18"
      className={className}
      onClick={onClick}
    >
      <path
        id="Path_5794"
        data-name="Path 5794"
        d="M19,21H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19a2,2,0,0,1,2,2V19A2,2,0,0,1,19,21ZM5,5V19H19V5ZM18,17H6l3-4,1,1,3-4ZM8.5,11A1.5,1.5,0,1,1,10,9.5,1.5,1.5,0,0,1,8.5,11Z"
        transform="translate(-3 -3)"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};
