import { FC, memo } from 'react';

const FooterSecond: FC<IStyleBox> = memo(({ onClick, active = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="218"
      height="34"
      viewBox="0 0 234 34"
      onClick={onClick}
      className="cursor-pointer"
    >
      <g id="Footer-Style-2" transform="translate(-334 -290)">
        <g id="Group_1299" transform="translate(0 111)">
          <path
            id="Rectangle_12122"
            fill={active ? '#1578e6' : '#2e323d'}
            d="M2 0h230a2 2 0 0 1 2 2v18H0V2a2 2 0 0 1 2-2z"
            transform="translate(334 179)"
          />
        </g>
        <circle
          id="Ellipse_140"
          cx="3"
          cy="3"
          r="3"
          className="cls-2"
          transform="translate(362 297)"
        />
        <circle
          id="Ellipse_141"
          cx="3"
          cy="3"
          r="3"
          className="cls-2"
          transform="translate(353 297)"
        />
        <circle
          id="Ellipse_142"
          cx="3"
          cy="3"
          r="3"
          className="cls-2"
          transform="translate(344 297)"
        />
        <path
          id="Line_208"
          d="M7 0L0 0"
          className="cls-3"
          transform="translate(550 300)"
        />
        <path
          id="Line_209"
          d="M33 0L0 0"
          className="cls-3"
          transform="translate(378 300)"
        />
        <path
          id="Line_210"
          d="M7 0L0 0"
          className="cls-3"
          transform="translate(536 300)"
        />
        <path
          id="Line_211"
          d="M8 0L0 0"
          className="cls-3"
          transform="translate(521 300)"
        />
        <path
          id="Line_212"
          d="M7 0L0 0"
          className="cls-3"
          transform="translate(507 300)"
        />
        <path
          id="Line_213"
          d="M7 0L0 0"
          className="cls-3"
          transform="translate(493 300)"
        />
        <g id="Group_1300" transform="translate(0 131)">
          <path
            id="Rectangle_12122-2"
            d="M0 0h234v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V0z"
            className="cls-2"
            transform="translate(334 179)"
          />
        </g>
        <path
          id="Line_214"
          d="M24 0L0 0"
          className="cls-4"
          transform="translate(344 317)"
        />
        <path
          id="Line_215"
          d="M65 0L0 0"
          className="cls-4"
          transform="translate(493 317)"
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
});
export default FooterSecond;
