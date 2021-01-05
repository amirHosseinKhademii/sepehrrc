import * as React from 'react';

function SvgTrash(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="trash"
        d="M20.498 5.57h-4v-1a3 3 0 00-3-3h-2a3 3 0 00-3 3v1h-4a1 1 0 000 2h1v11a3 3 0 003 3h8a3 3 0 003-3v-11h1a1 1 0 000-2zm-10-1a1 1 0 011-1h2a1 1 0 011 1v1h-4zm7 14a1 1 0 01-1 1h-8a1 1 0 01-1-1v-11h10z"
        fill='current'
      />
    </svg>
  );
}

export default SvgTrash;
