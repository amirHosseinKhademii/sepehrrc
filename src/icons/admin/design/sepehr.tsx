import { FC } from 'react';

export const ICSepehr: FC<IIcon> = ({
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
      className={className}
      onClick={onClick}
      viewBox="0 0 22.848 22.848"
    >
      <g
        id="Group_1398"
        data-name="Group 1398"
        transform="translate(-1484.152 -942.354)"
      >
        <path
          id="Path_5710"
          data-name="Path 5710"
          d="M3.264,0h16.32a3.264,3.264,0,0,1,3.264,3.264v16.32a3.264,3.264,0,0,1-3.264,3.264H3.264A3.264,3.264,0,0,1,0,19.584V3.264A3.264,3.264,0,0,1,3.264,0Z"
          transform="translate(1484.152 942.354)"
          fill="#636c81"
        />
        <path
          id="Path_5711"
          data-name="Path 5711"
          d="M-1311.888-1702.053a11.064,11.064,0,0,0,2.658,2.94,6.138,6.138,0,0,0,3.159.938,6.262,6.262,0,0,0,3.222-.938,9.939,9.939,0,0,0,2.534-2.94"
          transform="translate(2801.751 2651.234)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};
