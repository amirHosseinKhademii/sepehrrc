import * as React from 'react';

function SvgSort(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 40" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="sort"
        d="M16.407 14.153l-4.29 4.3-4.29-4.3a1.004 1.004 0 00-1.42 1.42l5 5a1 1 0 001.42 0l5-5a1.004 1.004 0 10-1.42-1.42zm-8.58-4.58l4.29-4.3 4.29 4.3a1.004 1.004 0 101.42-1.42l-5-5a1 1 0 00-1.42 0l-5 5a1.004 1.004 0 001.42 1.42z"
        fill='current'
      />
    </svg>
  );
}

export default SvgSort;
