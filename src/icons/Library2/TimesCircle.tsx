import * as React from 'react';

function SvgTimesCircle(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="times-circle"
        d="M15.286 8.433a1 1 0 00-1.42 0l-2.29 2.3-2.29-2.3a1.004 1.004 0 00-1.42 1.42l2.3 2.29-2.3 2.29a1.004 1.004 0 101.42 1.42l2.29-2.3 2.29 2.3a1.004 1.004 0 101.42-1.42l-2.3-2.29 2.3-2.29a1 1 0 000-1.42zm3.36-3.36a10 10 0 100 14.142 10 10 0 000-14.142zm-1.41 12.73a8 8 0 112.34-5.66 8 8 0 01-2.34 5.66z"
        fill='current'
      />
    </svg>
  );
}

export default SvgTimesCircle;
