import * as React from 'react';

function SvgMinusCircle(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="minus-circle"
        d="M11.567 2.143a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8zm4-9h-8a1 1 0 000 2h8a1 1 0 000-2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgMinusCircle;
