import { FC } from 'react';

export const ICSliderBtnThree: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 72}
      height={height ? height : 24}
      viewBox="0 0 72 24"
      className={className}
      onClick={onClick}
    >
      <g id="Group_930" data-name="Group 930" transform="translate(-1807 -884)">
        <g id="angle-right" transform="translate(1855.09 884)">
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
          transform="translate(1807 884)"
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
        <g id="ellipsis-h" transform="translate(1831 884)">
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
        </g>
      </g>
    </svg>
  );
};
