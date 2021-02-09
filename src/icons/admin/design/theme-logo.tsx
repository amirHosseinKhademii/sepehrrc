import { FC } from 'react';

export const ICThemeLogo: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      width={width ? width : '178.001'}
      height={height ? height : '46.746'}
      viewBox="0 0 178.001 46.746"
      className={className}
      onClick={onClick}
    >
      <g>
        <text
          fill="#414655"
          fontFamily="Lato-Regular, Lato"
          fontSize="14px"
          transform="translate(45.075 37.185) translate(76.925 4.935)"
        >
          <tspan x="-112.98" y="0">
            www.yoursite.com
          </tspan>
        </text>
        <text
          fill="#414655"
          fontFamily="YekanBakh-Bold, Yekan Bakh"
          fontSize="16px"
          fontWeight="700"
          transform="translate(45.075 37.185) translate(76.925 -19.814)"
        >
          <tspan x="-121.072" y="0">
            تصویر پیشفرض لوگو
          </tspan>
        </text>
        <g>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="3px"
            d="M-1311.888-1702.053a22.543 22.543 0 0 0 5.415 5.989 12.5 12.5 0 0 0 6.435 1.911 12.757 12.757 0 0 0 6.563-1.911 20.26 20.26 0 0 0 5.161-5.989"
            transform="translate(45.075 37.185) translate(98.831 -35.123) translate(1311.888 1702.053)"
          />
        </g>
        <path
          fill="#414655"
          d="M49.853 7.5H10.147A2.647 2.647 0 0 0 7.5 10.147v39.706a2.647 2.647 0 0 0 2.647 2.647h39.706a2.647 2.647 0 0 0 2.647-2.647V10.147A2.647 2.647 0 0 0 49.853 7.5zm-8.931 9.234a3.471 3.471 0 1 1-3.471 3.471 3.475 3.475 0 0 1 3.471-3.471zm5.189 26.4a.266.266 0 0 1-.229.131H14.118a.265.265 0 0 1-.23-.4l8.888-15.625a.265.265 0 0 1 .224-.134.309.309 0 0 1 .23.128l3.17 5.241 7.036-11.307a.265.265 0 0 1 .456.01l12.222 21.694a.269.269 0 0 1-.003.263z"
          transform="translate(45.075 37.185) translate(80.426 -42.939)"
        />
      </g>
    </svg>
  );
};
