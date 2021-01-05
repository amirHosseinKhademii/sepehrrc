import * as React from 'react';

function SvgUnlock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 20" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="unlock"
        d="M16.992 8.569h-8v-2a3 3 0 015.12-2.13 3.08 3.08 0 01.78 1.38 1.002 1.002 0 101.94-.5 5.09 5.09 0 00-1.31-2.29 5 5 0 00-8.53 3.54v2a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-7a3 3 0 00-3-3zm1 10a1 1 0 01-1 1h-10a1 1 0 01-1-1v-7a1 1 0 011-1h10a1 1 0 011 1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgUnlock;
