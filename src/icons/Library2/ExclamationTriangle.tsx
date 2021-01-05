import * as React from 'react';

function SvgExclamationTriangle(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="exclamation-triangle"
        d="M12.031 16.211a1 1 0 101 1 1 1 0 00-1-1zm10.67 1.47l-8.05-14a3 3 0 00-5.24 0l-8 14a3 3 0 002.56 4.53h16.12a3 3 0 002.61-4.53zm-1.73 2a1 1 0 01-.88.51H3.971a1.01 1.01 0 01-.88-1.51l8-14a1 1 0 011.78 0l8.05 14a1 1 0 01.05 1.02zm-8.94-11.47a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgExclamationTriangle;
