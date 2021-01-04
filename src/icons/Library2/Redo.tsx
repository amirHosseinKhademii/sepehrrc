import * as React from 'react';

function SvgRedo(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="redo"
        d="M20.87 10.572a1 1 0 00-1 1 8.05 8.05 0 11-2.22-5.5h-2.4a1 1 0 000 2h4.53a1 1 0 001-1v-4.5a1 1 0 00-2 0v1.77a10 10 0 103.09 7.23 1 1 0 00-1-1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgRedo;
