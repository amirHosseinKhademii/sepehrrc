import { FC } from 'react';
import { IIcon } from '../../interfaces';

export const ICSliderBtnTwo: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 48}
      height={height ? height : 24}
      viewBox="0 0 48 24"
      className={className}
      onClick={onClick}
    >
      <g id="Group_929" data-name="Group 929" transform="translate(-1718 -883)">
        <g id="angle-right" transform="translate(1742.09 883)">
          <rect
            id="Rectangle_30"
            data-name="Rectangle 30"
            width="24"
            height="24"
            transform="translate(-0.09)"
            fill="none"
          />
          <path
            id="angle-right-2"
            data-name="angle-right"
            d="M14.83,11.29,10.59,7.05A1,1,0,0,0,9.17,8.46L12.71,12,9.17,15.54a1,1,0,0,0,1.42,1.41l4.24-4.24a1,1,0,0,0,0-1.42Z"
            transform="translate(0.029 0.675)"
            fill={fill ? fill : '#9ba3b5'}
          />
        </g>
        <g
          id="angle-right-3"
          data-name="angle-right"
          transform="translate(1718 883)"
        >
          <rect
            id="Rectangle_30-2"
            data-name="Rectangle 30"
            width="24"
            height="24"
            fill="none"
          />
          <path
            id="angle-right-4"
            data-name="angle-right"
            d="M9.175,11.29l4.24-4.24a1,1,0,0,1,1.42,1.41L11.3,12l3.54,3.54a1,1,0,0,1-1.42,1.41l-4.24-4.24a1,1,0,0,1,0-1.42Z"
            transform="translate(-0.124 0.675)"
            fill={fill ? fill : '#9ba3b5'}
          />
        </g>
      </g>
    </svg>
  );
};
