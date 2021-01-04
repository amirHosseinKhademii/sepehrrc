import * as React from 'react';

function SvgFile(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="file"
        d="M19.737 8.51a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.09l-.32-.11h-6.06a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V8.51zm-6-3.53l2.59 2.59h-2.59zm4 13.59a1 1 0 01-1 1h-10a1 1 0 01-1-1v-14a1 1 0 011-1h5v5a1 1 0 001 1h5z"
        fill='current'
      />
    </svg>
  );
}

export default SvgFile;
