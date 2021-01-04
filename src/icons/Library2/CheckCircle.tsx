import * as React from 'react';

function SvgCheckCircle(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="check-circle"
        d="M14.855 8.933l-4.29 4.3-1.65-1.65a1 1 0 10-1.41 1.41l2.35 2.36a1 1 0 001.41 0l5-5a1 1 0 10-1.41-1.42zm-2.72-6.79a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
        fill='current'
      />
    </svg>
  );
}

export default SvgCheckCircle;
