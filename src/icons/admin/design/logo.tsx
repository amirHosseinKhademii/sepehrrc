import { FC } from 'react';
import { IIcon } from './interfaces';

export const ICLogo: FC<IIcon> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      className={className}
    >
      <g id="logo-dark" transform="translate(-1868 -914.201)">
        <path
          id="Path_5708"
          data-name="Path 5708"
          d="M5.143,0H30.857A5.143,5.143,0,0,1,36,5.143V30.857A5.143,5.143,0,0,1,30.857,36H5.143A5.143,5.143,0,0,1,0,30.857V5.143A5.143,5.143,0,0,1,5.143,0Z"
          transform="translate(1868 914.201)"
          fill="#2e323d"
        />
        <g
          id="Group_934"
          data-name="Group 934"
          transform="translate(1877 924.959)"
        >
          <path
            id="Path_1"
            data-name="Path 1"
            d="M-1311.888-1702.053a17.439,17.439,0,0,0,4.189,4.632,9.673,9.673,0,0,0,4.978,1.478,9.868,9.868,0,0,0,5.076-1.478,15.666,15.666,0,0,0,3.992-4.632"
            transform="translate(1311.887 1702.053)"
            fill="none"
            stroke="#636c81"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </g>
      </g>
    </svg>
  );
};
