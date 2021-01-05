import * as React from 'react';

function SvgCopyAlt(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="copy-alt"
        d="M16.413 20.143h-8a3 3 0 01-3-3v-10a1 1 0 00-2 0v10a5 5 0 005 5h8a1 1 0 000-2zm5-11.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.09l-.32-.11h-4.06a3 3 0 00-3 3v10a3 3 0 003 3h8a3 3 0 003-3v-6.06zm-6-3.53l2.59 2.59h-1.59a1 1 0 01-1-1zm4 9.59a1 1 0 01-1 1h-8a1 1 0 01-1-1v-10a1 1 0 011-1h3v3a3 3 0 003 3h3z"
        fill='current'
      />
    </svg>
  );
}

export default SvgCopyAlt;
