import { FC } from 'react';

export const ICBannerStyleFirst: FC<ISvg> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 234}
      height={height ? height : 36}
      viewBox="0 0 234 36"
      className={className}
      onClick={onClick}
    >
      <g id="Banner-Style-1" transform="translate(-102 -602)">
        <g
          id="Group_1416"
          data-name="Group 1416"
          transform="translate(-232 312)"
        >
          <g
            id="Group_1299"
            data-name="Group 1299"
            transform="translate(334 290)"
          >
            <rect
              id="Rectangle_12122"
              data-name="Rectangle 12122"
              width="111"
              height="36"
              rx="2"
              fill="#1578e6"
            />
          </g>
          <path
            id="download"
            d="M23.5,7.5H8.5a1,1,0,0,0-1,1v15a1,1,0,0,0,1,1h15a1,1,0,0,0,1-1V8.5A1,1,0,0,0,23.5,7.5Zm-3.374,3.488A1.311,1.311,0,1,1,18.815,12.3,1.313,1.313,0,0,1,20.126,10.988Zm1.96,9.974a.1.1,0,0,1-.086.05H10a.1.1,0,0,1-.087-.149l3.358-5.9a.1.1,0,0,1,.086-.051.117.117,0,0,1,.087.048l1.2,1.98L17.3,12.663a.1.1,0,0,1,.172,0l4.618,8.2A.1.1,0,0,1,22.086,20.962Z"
            transform="translate(373.5 292.5)"
            fill="#36a7ff"
          />
        </g>
        <g
          id="Group_1417"
          data-name="Group 1417"
          transform="translate(-109 312)"
        >
          <g
            id="Group_1299-2"
            data-name="Group 1299"
            transform="translate(334 290)"
          >
            <rect
              id="Rectangle_12122-2"
              data-name="Rectangle 12122"
              width="111"
              height="36"
              rx="2"
              fill="#1578e6"
            />
          </g>
          <path
            id="download-2"
            data-name="download"
            d="M23.5,7.5H8.5a1,1,0,0,0-1,1v15a1,1,0,0,0,1,1h15a1,1,0,0,0,1-1V8.5A1,1,0,0,0,23.5,7.5Zm-3.374,3.488A1.311,1.311,0,1,1,18.815,12.3,1.313,1.313,0,0,1,20.126,10.988Zm1.96,9.974a.1.1,0,0,1-.086.05H10a.1.1,0,0,1-.087-.149l3.358-5.9a.1.1,0,0,1,.086-.051.117.117,0,0,1,.087.048l1.2,1.98L17.3,12.663a.1.1,0,0,1,.172,0l4.618,8.2A.1.1,0,0,1,22.086,20.962Z"
            transform="translate(373.5 292.5)"
            fill="#36a7ff"
          />
        </g>
      </g>
    </svg>
  );
};
