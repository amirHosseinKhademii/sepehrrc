import * as React from 'react';

function SvgExit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 40" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="exit"
        d="M4.113 12.43a1 1 0 001 1h7.59l-2.3 2.29a1.004 1.004 0 101.42 1.42l4-4a1.034 1.034 0 000-1.42l-4-4a1.004 1.004 0 00-1.42 1.42l2.3 2.29h-7.59a1 1 0 00-1 1zm13-10h-10a3 3 0 00-3 3v3a1 1 0 002 0v-3a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1h-10a1 1 0 01-1-1v-3a1 1 0 00-2 0v3a3 3 0 003 3h10a3 3 0 003-3v-14a3 3 0 00-3-3z"
        fill='current'
      />
    </svg>
  );
}

export default SvgExit;
