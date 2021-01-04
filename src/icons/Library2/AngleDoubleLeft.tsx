import * as React from 'react';

function SvgAngleDoubleLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 27" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="angle-double-left"
        d="M11.839 8.153a1 1 0 00-1.42 0l-3 3a1 1 0 000 1.42l3 3a1.004 1.004 0 101.42-1.42l-2.3-2.29 2.3-2.29a1 1 0 000-1.42zm3.2 3.71l2.34-2.29a1.004 1.004 0 10-1.42-1.42l-3 3a1 1 0 000 1.42l3 3a1.004 1.004 0 101.42-1.42z"
        fill='current'
      />
    </svg>
  );
}

export default SvgAngleDoubleLeft;
