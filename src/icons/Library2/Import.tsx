import * as React from 'react';

function SvgImport(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="import"
        d="M20.992 14.43a1 1 0 00-1 1v4a1 1 0 01-1 1h-14a1 1 0 01-1-1v-4a1 1 0 00-2 0v4a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm-9.71 1.71a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l4-4a1.004 1.004 0 00-1.42-1.42l-2.29 2.3V3.43a1 1 0 00-2 0v9.59l-2.29-2.3a1.004 1.004 0 00-1.42 1.42z"
        fill='current'
      />
    </svg>
  );
}

export default SvgImport;
