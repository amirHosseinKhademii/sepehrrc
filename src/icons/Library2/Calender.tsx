import * as React from 'react';

function SvgCalender(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="calender"
        d="M19.74 3.57h-2v-1a1 1 0 00-2 0v1h-6v-1a1 1 0 00-2 0v1h-2a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3v-12a3 3 0 00-3-3zm1 15a1 1 0 01-1 1h-14a1 1 0 01-1-1v-7h16zm0-9h-16v-3a1 1 0 011-1h2v1a1 1 0 002 0v-1h6v1a1 1 0 002 0v-1h2a1 1 0 011 1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgCalender;
