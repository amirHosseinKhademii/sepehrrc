import { IIcon } from 'icons/interfaces';
import { FC } from 'react';

export const ICSlider: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 45}
      height={height ? height : 23}
      viewBox="0 0 45 23"
      className={className}
      onClick={onClick}
    >
      <g id="Group_990" data-name="Group 990" transform="translate(-1584 -194)">
        <rect
          id="Rectangle_11555"
          data-name="Rectangle 11555"
          width="45"
          height="23"
          rx="2"
          transform="translate(1584 194)"
          fill="#51596a"
        />
        <path
          id="Path_5698"
          data-name="Path 5698"
          d="M-10583.122,11868.073l-4.116,4.116,4.116,4.117"
          transform="translate(12178 -11667)"
          fill="none"
          stroke="#9ba3b5"
          stroke-width="2"
        />
        <path
          id="Path_5699"
          data-name="Path 5699"
          d="M-10587.237,11868.073l4.116,4.116-4.116,4.117"
          transform="translate(12205.877 -11667)"
          fill="none"
          stroke="#9ba3b5"
          stroke-width="2"
        />
      </g>
    </svg>
  );
};
