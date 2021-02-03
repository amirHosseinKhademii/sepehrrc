import { FC } from 'react';

export const ICProductList: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 45.944}
      height={height ? height : 23}
      className={className}
      onClick={onClick}
      viewBox="0 0 45.944 23"
    >
      <g
        id="Group_989"
        data-name="Group 989"
        transform="translate(-1584.348 -271)"
      >
        <rect
          id="Rectangle_11556"
          data-name="Rectangle 11556"
          width="12"
          height="23"
          rx="2"
          transform="translate(1594 271)"
          fill="#51596a"
        />
        <path
          id="Path_5700"
          data-name="Path 5700"
          d="M-10583.122,11868.073l-4.116,4.116,4.116,4.117"
          transform="translate(12173 -11590)"
          fill="none"
          stroke="#9ba3b5"
          strokeWidth="2"
        />
        <path
          id="Path_5701"
          data-name="Path 5701"
          d="M-10587.237,11868.073l4.116,4.116-4.116,4.117"
          transform="translate(12211.999 -11590)"
          fill="none"
          stroke="#9ba3b5"
          strokeWidth="2"
        />
        <rect
          id="Rectangle_11557"
          data-name="Rectangle 11557"
          width="12"
          height="23"
          rx="2"
          transform="translate(1609 271)"
          fill="#51596a"
        />
      </g>
    </svg>
  );
};
