import * as React from 'react';

function SvgCompress(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="compress"
        d="M15.576 8.57h5a1 1 0 000-2h-4v-4a1 1 0 00-2 0v5a1 1 0 001 1zm-8 6h-5a1 1 0 000 2h4v4a1 1 0 002 0v-5a1 1 0 00-1-1zm0-13a1 1 0 00-1 1v4h-4a1 1 0 000 2h5a1 1 0 001-1v-5a1 1 0 00-1-1zm13 13h-5a1 1 0 00-1 1v5a1 1 0 002 0v-4h4a1 1 0 000-2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgCompress;
