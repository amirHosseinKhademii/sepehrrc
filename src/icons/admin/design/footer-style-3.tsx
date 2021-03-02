import { FC } from 'react';

export const ICFooterThird: FC<ISvg> = ({
  className,
  onClick,
  height,
  width,
  fill,
  fillSecondary,
  stroke,
  strokeSecondary,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="218"
      height="50"
      className={className}
      onClick={onClick}
      viewBox="0 0 234 50"
    >
      <g
        id="Footer-Style-3"
        transform="translate(-334 -580)"
        className="iconClass"
      >
        <g id="Group_1305" transform="translate(0 401)">
          <path
            id="Rectangle_12122"
            fill={fill ? fill : 'current'}
            className="fillIcon"
            d="M2 0h230a2 2 0 0 1 2 2v34H0V2a2 2 0 0 1 2-2z"
            transform="translate(334 179)"
          />
        </g>
        <circle
          id="Ellipse_146"
          cx="3"
          cy="3"
          r="3"
          fill={fillSecondary ? fillSecondary : 'current'}
          className="fillSecondaryIcon"
          transform="translate(552 600)"
        />
        <circle
          id="Ellipse_147"
          cx="3"
          cy="3"
          r="3"
          fill={fillSecondary ? fillSecondary : 'current'}
          className="fillSecondaryIcon"
          transform="translate(543 600)"
        />
        <circle
          id="Ellipse_148"
          cx="3"
          cy="3"
          r="3"
          fill={fillSecondary ? fillSecondary : 'current'}
          className="fillSecondaryIcon"
          transform="translate(534 600)"
        />
        <path
          id="Line_229"
          d="M33 0L0 0"
          className="cls-3 strokeIcon"
          stroke={stroke ? stroke : 'current'}
          transform="translate(493 603)"
        />
        <g id="Group_1306" transform="translate(0 437)">
          <path
            id="Rectangle_12122-2"
            d="M0 0h234v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V0z"
            fill={fillSecondary ? fillSecondary : 'current'}
            className="fillSecondaryIcon"
            transform="translate(334 179)"
          />
        </g>
        <path
          id="Line_234"
          d="M24 0L0 0"
          className="cls-4 strokeSecondaryIcon"
          stroke={strokeSecondary ? strokeSecondary : 'current'}
          transform="translate(344 623)"
        />
        <path
          id="Line_235"
          d="M65 0L0 0"
          className="cls-4 strokeSecondaryIcon "
          stroke={strokeSecondary ? strokeSecondary : 'current'}
          transform="translate(493 623)"
        />
        <rect
          id="Rectangle_12130"
          width="16"
          height="6"
          fill={fillSecondary ? fillSecondary : 'current'}
          className="fillSecondaryIcon"
          rx="2"
          transform="translate(344 600)"
        />
        <rect
          id="Rectangle_12131"
          width="16"
          height="16"
          fill={fillSecondary ? fillSecondary : 'current'}
          className="fillSecondaryIcon"
          rx="2"
          transform="translate(365 590)"
        />
        <path
          id="Line_351"
          d="M7 0L0 0"
          className="cls-3 strokeIcon"
          stroke={stroke ? stroke : 'current'}
          transform="translate(550 591)"
        />
        <path
          id="Line_352"
          d="M7 0L0 0"
          className="cls-3 strokeIcon"
          stroke={stroke ? stroke : 'current'}
          transform="translate(536 591)"
        />
        <path
          id="Line_353"
          d="M8 0L0 0"
          className="cls-3 strokeIcon"
          stroke={stroke ? stroke : 'current'}
          transform="translate(521 591)"
        />
        <path
          id="Line_354"
          d="M7 0L0 0"
          className="cls-3 strokeIcon"
          stroke={stroke ? stroke : 'current'}
          transform="translate(507 591)"
        />
        <path
          id="Line_355"
          d="M7 0L0 0"
          className="cls-3 strokeIcon"
          stroke={stroke ? stroke : 'current'}
          transform="translate(493 591)"
        />
        <rect
          id="Rectangle_12243"
          width="16"
          height="6"
          fill={fillSecondary ? fillSecondary : 'current'}
          className="fillSecondaryIcon"
          rx="2"
          transform="translate(344 590)"
        />
      </g>
      <style jsx>
        {`
          .cls-3,
          .cls-4 {
            fill: none;
            stroke-linecap: round;
            stroke-width: 3px;
          }
          .iconClass:hover .fillIcon {
            fill: #1578e6;
            transition: 0.5s;
          }
          .iconClass:hover .fillSecondaryIcon {
            fill: #36a7ff;
            transition: 0.5s;
          }
          .iconClass:hover .strokeIcon {
            stroke: #36a7ff;
            transition: 0.5s;
          }
          .iconClass:hover .strokeSecondaryIcon {
            stroke: #1577e6;
            transition: 0.5s;
          }
        `}
      </style>
    </svg>
  );
};
