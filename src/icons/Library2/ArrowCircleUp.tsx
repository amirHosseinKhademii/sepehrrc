import * as React from 'react';

function SvgArrowCircleUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 35" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="arrow-circle-up"
        d="M12.83 8.72a1.034 1.034 0 00-1.42 0l-3 3a1.004 1.004 0 001.42 1.42l1.29-1.3v3.59a1 1 0 002 0v-3.59l1.29 1.3a1.004 1.004 0 101.42-1.42zm-.71-6.29a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
        fill='current'
      />
    </svg>
  );
}

export default SvgArrowCircleUp;
