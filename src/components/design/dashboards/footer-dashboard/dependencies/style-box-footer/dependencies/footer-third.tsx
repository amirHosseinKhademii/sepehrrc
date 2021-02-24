import { FC } from 'react';

const FooterThird: FC<{ active?: boolean; onClick?: any }> = ({
  active,
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="218"
      height="50"
      viewBox="0 0 234 50"
      className="cursor-pointer"
      onClick={onClick}
    >
      <g id="Footer-Style-3" transform="translate(-334 -580)">
        <g id="Group_1305" transform="translate(0 401)">
          <path
            id="Rectangle_12122"
            fill={active ? '#1578e6' : '#2e323d'}
            d="M2 0h230a2 2 0 0 1 2 2v34H0V2a2 2 0 0 1 2-2z"
            transform="translate(334 179)"
          />
        </g>
        <circle
          id="Ellipse_146"
          cx="3"
          cy="3"
          r="3"
          className="cls-2"
          transform="translate(552 600)"
        />
        <circle
          id="Ellipse_147"
          cx="3"
          cy="3"
          r="3"
          className="cls-2"
          transform="translate(543 600)"
        />
        <circle
          id="Ellipse_148"
          cx="3"
          cy="3"
          r="3"
          className="cls-2"
          transform="translate(534 600)"
        />
        <path
          id="Line_229"
          d="M33 0L0 0"
          className="cls-3"
          transform="translate(493 603)"
        />
        <g id="Group_1306" transform="translate(0 437)">
          <path
            id="Rectangle_12122-2"
            d="M0 0h234v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V0z"
            className="cls-2"
            transform="translate(334 179)"
          />
        </g>
        <path
          id="Line_234"
          d="M24 0L0 0"
          className="cls-4"
          transform="translate(344 623)"
        />
        <path
          id="Line_235"
          d="M65 0L0 0"
          className="cls-4"
          transform="translate(493 623)"
        />
        <rect
          id="Rectangle_12130"
          width="16"
          height="6"
          className="cls-2"
          rx="2"
          transform="translate(344 600)"
        />
        <rect
          id="Rectangle_12131"
          width="16"
          height="16"
          className="cls-2"
          rx="2"
          transform="translate(365 590)"
        />
        <path
          id="Line_351"
          d="M7 0L0 0"
          className="cls-3"
          transform="translate(550 591)"
        />
        <path
          id="Line_352"
          d="M7 0L0 0"
          className="cls-3"
          transform="translate(536 591)"
        />
        <path
          id="Line_353"
          d="M8 0L0 0"
          className="cls-3"
          transform="translate(521 591)"
        />
        <path
          id="Line_354"
          d="M7 0L0 0"
          className="cls-3"
          transform="translate(507 591)"
        />
        <path
          id="Line_355"
          d="M7 0L0 0"
          className="cls-3"
          transform="translate(493 591)"
        />
        <rect
          id="Rectangle_12243"
          width="16"
          height="6"
          className="cls-2"
          rx="2"
          transform="translate(344 590)"
        />
      </g>
      <style jsx>
        {`
          .cls-2 {
            fill: ${active ? '#36a7ff' : '#636c81'};
          }
          .cls-3,
          .cls-4 {
            fill: none;
            stroke-linecap: round;
            stroke-width: 3px;
          }
          .cls-3 {
            stroke: ${active ? '#36a7ff' : '#636c81'};
          }
          .cls-4 {
            stroke: ${active ? '#1577e6' : '#2e323d'};
          }
        `}
      </style>
    </svg>
  );
};

export default FooterThird;
