import * as React from 'react';

function SvgArrowCircleLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 33" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="arrow-circle-left"
        d="M8.532 11.72a1.034 1.034 0 000 1.42l3 3a1.004 1.004 0 001.42-1.42l-1.3-1.29h3.59a1 1 0 000-2h-3.59l1.3-1.29a1.004 1.004 0 10-1.42-1.42zm-6.29.71a10 10 0 1010-10 10 10 0 00-10 10zm18 0a8 8 0 11-8-8 8 8 0 018 8z"
        fill='current'
      />
    </svg>
  );
}

export default SvgArrowCircleLeft;
