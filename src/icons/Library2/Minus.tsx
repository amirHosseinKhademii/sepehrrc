import * as React from 'react';

function SvgMinus(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="minus"
        d="M18.567 10.857h-14a1 1 0 000 2h14a1 1 0 000-2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgMinus;
