import * as React from 'react';

function SvgMobileAndroid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 37" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="mobile-android"
        d="M12.71 16.433l-.15-.12a.76.76 0 00-.18-.09l-.18-.08a1 1 0 00-.91.27 1.15 1.15 0 00-.21.33 1 1 0 001.3 1.31 1.46 1.46 0 00.33-.22.99.99 0 000-1.4zM16 2.143H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3v-14a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H8a1 1 0 01-1-1v-14a1 1 0 011-1h8a1 1 0 011 1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgMobileAndroid;
