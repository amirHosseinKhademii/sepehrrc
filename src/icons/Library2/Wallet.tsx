import * as React from 'react';

function SvgWallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 25" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="wallet"
        d="M18.928 6.57h-1v-1a3 3 0 00-3-3h-10a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3v-8a3 3 0 00-3-3zm-14-2h10a1 1 0 011 1v1h-11a1 1 0 010-2zm15 10h-1a1 1 0 010-2h1zm0-4h-1a3 3 0 100 6h1v1a1 1 0 01-1 1h-14a1 1 0 01-1-1V8.4a3 3 0 001 .17h14a1 1 0 011 1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgWallet;
