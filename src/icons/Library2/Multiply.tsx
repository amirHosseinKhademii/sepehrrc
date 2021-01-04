import * as React from 'react';

function SvgMultiply(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="multiply"
        d="M13.551 11.861l6.3-6.29a1.004 1.004 0 10-1.42-1.42l-6.29 6.3-6.29-6.3a1.004 1.004 0 00-1.42 1.42l6.3 6.29-6.3 6.29a1.004 1.004 0 101.42 1.42l6.29-6.3 6.29 6.3a1.004 1.004 0 101.42-1.42z"
        fill='current'
      />
    </svg>
  );
}

export default SvgMultiply;
