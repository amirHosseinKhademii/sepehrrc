import * as React from 'react';

function SvgTransaction(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="transaction"
        d="M20.413 1.57h-10a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-7a3 3 0 00-3-3zm1 10a1 1 0 01-1 1h-10a1 1 0 01-1-1v-7a1 1 0 011-1h10a1 1 0 011 1zm-3.5-4a1.49 1.49 0 00-1 .39 1.5 1.5 0 100 2.22 1.5 1.5 0 101-2.61zm-1.5 9a1 1 0 00-1 1v1a1 1 0 01-1 1h-10a1 1 0 01-1-1v-4h1a1 1 0 000-2h-1v-1a1 1 0 011-1 1 1 0 000-2 3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-1a1 1 0 00-1-1zm-10 1h1a1 1 0 000-2h-1a1 1 0 000 2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgTransaction;
