import * as React from 'react';

function SvgEllipsisV(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 41" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="ellipsis-v"
        d="M11.567 6.57a2 2 0 10-2-2 2 2 0 002 2zm0 10a2 2 0 102 2 2 2 0 00-2-2zm0-7a2 2 0 102 2 2 2 0 00-2-2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgEllipsisV;
