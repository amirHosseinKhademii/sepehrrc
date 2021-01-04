import * as React from 'react';

function SvgNotes(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="notes"
        d="M15.99 13.57h-8a1 1 0 000 2h8a1 1 0 000-2zm0-4h-6a1 1 0 000 2h6a1 1 0 000-2zm4-6h-3v-1a1 1 0 00-2 0v1h-2v-1a1 1 0 00-2 0v1h-2v-1a1 1 0 00-2 0v1h-3a1 1 0 00-1 1v14a3 3 0 003 3h12a3 3 0 003-3v-14a1 1 0 00-1-1zm-1 15a1 1 0 01-1 1h-12a1 1 0 01-1-1v-13h2v1a1 1 0 002 0v-1h2v1a1 1 0 002 0v-1h2v1a1 1 0 002 0v-1h2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgNotes;
