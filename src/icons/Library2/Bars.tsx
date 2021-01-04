import * as React from 'react';

function SvgBars(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="bars"
        d="M2.999 7.857h18a1 1 0 000-2h-18a1 1 0 000 2zm18 8h-18a1 1 0 000 2h18a1 1 0 000-2zm0-5h-18a1 1 0 000 2h18a1 1 0 000-2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgBars;
