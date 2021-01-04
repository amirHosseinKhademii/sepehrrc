import * as React from 'react';

function SvgAngleRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 30" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="angle-right"
        d="M14.949 11.965l-4.24-4.24a1 1 0 00-1.42 1.41l3.54 3.54-3.54 3.54a1 1 0 001.42 1.41l4.24-4.24a1 1 0 000-1.42z"
        fill='current'
      />
    </svg>
  );
}

export default SvgAngleRight;
