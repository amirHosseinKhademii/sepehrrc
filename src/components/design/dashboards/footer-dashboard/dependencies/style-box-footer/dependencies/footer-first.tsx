import { FC, memo } from 'react';

const FooterFirst: FC<IStyleBox> = memo(({ onClick, active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="218"
      height="20"
      viewBox="0 0 234 20"
      onClick={onClick}
      className="cursor-pointer"
    >
      <g id="Footer-Style-1" transform="translate(-102 -89)">
        <g id="Group_1434" transform="translate(-232 -201)">
          <g id="Group_1299" transform="translate(0 111)">
            <rect
              id="Rectangle_12122"
              width="234"
              height="20"
              fill={active ? '#1578e6' : '#2e323d'}
              rx="2"
              transform="translate(334 179)"
            />
          </g>
          <circle
            id="Ellipse_140"
            cx="3"
            cy="3"
            r="3"
            className="cls-2"
            transform="translate(552 297)"
          />
          <circle
            id="Ellipse_141"
            cx="3"
            cy="3"
            r="3"
            className="cls-2"
            transform="translate(543 297)"
          />
          <circle
            id="Ellipse_142"
            cx="3"
            cy="3"
            r="3"
            className="cls-2"
            transform="translate(534 297)"
          />
          <path
            id="Line_209"
            d="M33 0L0 0"
            className="cls-3"
            transform="translate(493 300)"
          />
          <path
            id="Line_356"
            d="M33 0L0 0"
            className="cls-3"
            transform="translate(344 300)"
          />
        </g>
      </g>
      <style jsx>
        {`
          .cls-2 {
            fill: ${active ? '#36a7ff' : '#636c81'};
          }
          .cls-3 {
            fill: none;
            stroke: ${active ? '#36a7ff' : '#636c81'};
            stroke-linecap: round;
            stroke-width: 3px;
          }
        `}
      </style>
    </svg>
  );
});
export default FooterFirst;
