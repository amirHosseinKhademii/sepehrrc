import * as React from 'react';

function SvgEye(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="eye"
        d="M22.165 11.457c-2.02-4.69-5.82-7.6-9.92-7.6s-7.9 2.91-9.92 7.6a1 1 0 000 .8c2.02 4.69 5.82 7.6 9.92 7.6s7.9-2.91 9.92-7.6a1 1 0 000-.8zm-9.92 6.4c-3.17 0-6.17-2.29-7.9-6 1.73-3.71 4.73-6 7.9-6s6.17 2.29 7.9 6c-1.73 3.71-4.73 6-7.9 6zm0-10a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgEye;
