import * as React from 'react';

function SvgBell(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="bell"
        d="M17.999 12.75V9.57a6 6 0 00-5-5.91V2.57a1 1 0 00-2 0v1.09a6 6 0 00-5 5.91v3.18a3 3 0 00-2 2.82v2a1 1 0 001 1h3.14a4 4 0 007.72 0h3.14a1 1 0 001-1v-2a3 3 0 00-2-2.82zm-10-3.18a4 4 0 018 0v3h-8zm4 10a2 2 0 01-1.72-1h3.44a2 2 0 01-1.72 1zm6-3h-12v-1a1 1 0 011-1h10a1 1 0 011 1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgBell;
