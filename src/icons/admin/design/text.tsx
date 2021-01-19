import { IIcon } from 'icons/interfaces';
import { FC } from 'react';

export const ICText: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 43}
      height={height ? height : 25}
      className={className}
      onClick={onClick}
      viewBox="0 0 43 25"
    >
      <g id="Group_991" data-name="Group 991" transform="translate(-1586 -349)">
        <rect
          id="Rectangle_11558"
          data-name="Rectangle 11558"
          width="19"
          height="4"
          rx="2"
          transform="translate(1610 349)"
          fill="#636c81"
        />
        <rect
          id="Rectangle_11559"
          data-name="Rectangle 11559"
          width="43"
          height="4"
          rx="2"
          transform="translate(1586 356)"
          fill="#51596a"
        />
        <rect
          id="Rectangle_11560"
          data-name="Rectangle 11560"
          width="43"
          height="4"
          rx="2"
          transform="translate(1586 363)"
          fill="#51596a"
        />
        <rect
          id="Rectangle_11561"
          data-name="Rectangle 11561"
          width="43"
          height="4"
          rx="2"
          transform="translate(1586 370)"
          fill="#51596a"
        />
      </g>
    </svg>
  );
};
