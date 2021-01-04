import * as React from 'react';

function SvgClock(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="clock"
        d="M11.999 2.143a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8zm3.1-7.37l-2.1-1.21v-4.42a1 1 0 00-2 0v5.12a.65.65 0 00.05.2.89.89 0 00.08.17.86.86 0 00.1.16l.16.13.09.09 2.6 1.5a1.003 1.003 0 101-1.74z"
        fill='current'
      />
    </svg>
  );
}

export default SvgClock;
