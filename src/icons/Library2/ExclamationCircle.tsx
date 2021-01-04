import * as React from 'react';

function SvgExclamationCircle(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="exclamation-circle"
        d="M12.242 7.143a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zm.92 8.62a.76.76 0 00-.09-.18l-.12-.15a1 1 0 00-1.09-.21 1.15 1.15 0 00-.33.21.99.99 0 00-.21 1.09.9.9 0 00.54.54.94.94 0 00.76 0 .9.9 0 00.54-.54 1 1 0 00.08-.38 1.36 1.36 0 000-.2.64.64 0 00-.08-.18zm-.92-13.62a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
        fill='current'
      />
    </svg>
  );
}

export default SvgExclamationCircle;
