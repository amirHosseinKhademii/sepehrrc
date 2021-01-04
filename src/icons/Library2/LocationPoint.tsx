import * as React from 'react';

function SvgLocationPoint(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="location-point"
        d="M18.339 3.915a8.485 8.485 0 10-12 12l5.27 5.28a1 1 0 001.42 0l5.31-5.33a8.45 8.45 0 000-11.95zm-1.43 10.52l-4.57 4.59-4.57-4.59a6.46 6.46 0 119.14 0zm-7.57-7.59a4.313 4.313 0 107.36 3.1 4.24 4.24 0 00-1.26-3.05 4.3 4.3 0 00-6.1-.05zm4.69 4.68a.963.963 0 10-.05 0z"
        fill='current'
      />
    </svg>
  );
}

export default SvgLocationPoint;
