import * as React from 'react';

function SvgFileAlt(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="file-alt"
        d="M9.113 9.57h1a1 1 0 000-2h-1a1 1 0 000 2zm0 2a1 1 0 000 2h6a1 1 0 000-2zm11-3.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.32.32 0 00-.09 0 .88.88 0 00-.33-.11h-6.05a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V8.51zm-6-3.53l2.59 2.59h-1.59a1 1 0 01-1-1zm4 13.59a1 1 0 01-1 1h-10a1 1 0 01-1-1v-14a1 1 0 011-1h5v3a3 3 0 003 3h3zm-3-3h-6a1 1 0 000 2h6a1 1 0 000-2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgFileAlt;
