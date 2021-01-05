import * as React from 'react';

function SvgAngleUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 31" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="angle-up"
        d="M17.369 13.966l-4.29-4.24a1 1 0 00-1.42 0l-4.24 4.24a1 1 0 001.41 1.42l3.54-3.54 3.54 3.54a1.019 1.019 0 001.46-1.42z"
        fill='current'
      />
    </svg>
  );
}

export default SvgAngleUp;
