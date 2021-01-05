import * as React from 'react';

function SvgSlidersV(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="sliders-v"
        d="M6.854 6.143h-1v-3a1 1 0 00-2 0v3h-1a1 1 0 000 2h4a1 1 0 000-2zm-2 4a1 1 0 00-1 1v10a1 1 0 002 0v-10a1 1 0 00-1-1zm7 8a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zm9-8h-1v-7a1 1 0 00-2 0v7h-1a1 1 0 000 2h4a1 1 0 000-2zm-2 4a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zm-5 0h-1v-11a1 1 0 00-2 0v11h-1a1 1 0 000 2h4a1 1 0 000-2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgSlidersV;
