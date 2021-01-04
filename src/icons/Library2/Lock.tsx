import * as React from 'react';

function SvgLock(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="lock"
        d="M17.242 8.57v-2a5 5 0 00-10 0v2a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-7a3 3 0 00-3-3zm-8-2a3 3 0 016 0v2h-6zm9 12a1 1 0 01-1 1h-10a1 1 0 01-1-1v-7a1 1 0 011-1h10a1 1 0 011 1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgLock;
