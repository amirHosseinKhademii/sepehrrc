import * as React from 'react';

function SvgAngleDown(props: React.SVGProps<SVGSVGElement>) {

 
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 28" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="angle-down"
        d="M17.119 9.72a1 1 0 00-1.41 0l-3.59 3.54-3.54-3.54a1 1 0 10-1.41 1.42l4.24 4.24a1 1 0 001.42 0l4.29-4.24a1 1 0 000-1.42z"
        fill='current'
      />
    </svg>
  );
}

export default SvgAngleDown;
