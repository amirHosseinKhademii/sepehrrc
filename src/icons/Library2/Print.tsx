import * as React from 'react';

function SvgPrint(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="print"
        d="M6.737 9.857a1 1 0 101 1 1 1 0 00-1-1zm12-4h-1v-3a1 1 0 00-1-1h-10a1 1 0 00-1 1v3h-1a3 3 0 00-3 3v6a3 3 0 003 3h1v3a1 1 0 001 1h10a1 1 0 001-1v-3h1a3 3 0 003-3v-6a3 3 0 00-3-3zm-11-2h8v2h-8zm8 16h-8v-4h8zm4-5a1 1 0 01-1 1h-1v-1a1 1 0 00-1-1h-10a1 1 0 00-1 1v1h-1a1 1 0 01-1-1v-6a1 1 0 011-1h14a1 1 0 011 1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgPrint;
