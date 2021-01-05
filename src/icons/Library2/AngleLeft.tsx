import * as React from 'react';

function SvgAngleLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 29" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="angle-left"
        d="M11.913 12.675l3.54-3.54a1 1 0 10-1.42-1.41l-4.24 4.24a1 1 0 000 1.42l4.24 4.29a1 1 0 101.42-1.41z"
        fill='current'
      />
    </svg>
  );
}

export default SvgAngleLeft;
