import { FC, memo } from 'react';

export const ICFooterFirst: FC<ISvg> = memo(
  ({ className, onClick, height, width, fill, fillSecondary, stroke }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="218"
        height="20"
        viewBox="0 0 234 20"
        className={className}
        onClick={onClick}
      >
        <g
          id="Footer-Style-1"
          transform="translate(-102 -89)"
          className="iconClass"
        >
          <g id="Group_1434" transform="translate(-232 -201)">
            <g id="Group_1299" transform="translate(0 111)">
              <rect
                id="Rectangle_12122"
                width="234"
                height="20"
                fill={fill ? fill : 'current'}
                className="fillIcon"
                rx="2"
                transform="translate(334 179)"
              />
            </g>
            <circle
              id="Ellipse_140"
              cx="3"
              cy="3"
              r="3"
              fill={fillSecondary ? fillSecondary : 'current'}
              className="fillSecondaryIcon"
              transform="translate(552 297)"
            />
            <circle
              id="Ellipse_141"
              cx="3"
              cy="3"
              r="3"
              fill={fillSecondary ? fillSecondary : 'current'}
              className="fillSecondaryIcon"
              transform="translate(543 297)"
            />
            <circle
              id="Ellipse_142"
              cx="3"
              cy="3"
              r="3"
              fill={fillSecondary ? fillSecondary : 'current'}
              className="fillSecondaryIcon"
              transform="translate(534 297)"
            />
            <path
              id="Line_209"
              d="M33 0L0 0"
              fill="none"
              className="cls-3 strokeIcon"
              stroke={stroke ? stroke : 'current'}
              transform="translate(493 300)"
            />
            <path
              id="Line_356"
              d="M33 0L0 0"
              fill="none"
              className="cls-3 strokeIcon"
              stroke={stroke ? stroke : 'current'}
              transform="translate(344 300)"
            />
          </g>
        </g>
        <style jsx>
          {`
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
            .cls-3 {
              stroke-linecap: round;
              stroke-width: 3px;
            }
          `}
        </style>
      </svg>
    );
  }
);
