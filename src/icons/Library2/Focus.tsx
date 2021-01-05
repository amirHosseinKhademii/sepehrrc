import * as React from 'react';

function SvgFocus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 38" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="focus"
        d="M8.135 1.57h-5a1 1 0 00-1 1v5a1 1 0 002 0v-4h4a1 1 0 000-2zm0 18h-4v-4a1 1 0 00-2 0v5a1 1 0 001 1h5a1 1 0 000-2zm13-18h-5a1 1 0 000 2h4v4a1 1 0 002 0v-5a1 1 0 00-1-1zm0 13a1 1 0 00-1 1v4h-4a1 1 0 000 2h5a1 1 0 001-1v-5a1 1 0 00-1-1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgFocus;
