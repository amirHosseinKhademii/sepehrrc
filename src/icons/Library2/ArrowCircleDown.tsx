import * as React from 'react';

function SvgArrowCircleDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 32" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="arrow-circle-down"
        d="M10.909 16.14a1.034 1.034 0 001.42 0l3-3a1.004 1.004 0 00-1.42-1.42l-1.29 1.3V9.43a1 1 0 00-2 0v3.59l-1.29-1.3a1.004 1.004 0 10-1.42 1.42zm.71 6.29a10 10 0 10-10-10 10 10 0 0010 10zm0-18a8 8 0 11-8 8 8 8 0 018-8z"
        fill='current'
      />
    </svg>
  );
}

export default SvgArrowCircleDown;
