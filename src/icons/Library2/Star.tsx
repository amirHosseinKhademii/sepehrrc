import * as React from 'react';

function SvgStar(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="star"
        d="M22.734 9.664a1 1 0 00-.86-.67l-5.69-.83-2.55-5.17a1 1 0 00-1.8 0l-2.55 5.16-5.69.84a.985.985 0 00-.56 1.68l4.13 4-1 5.68a1 1 0 001.45 1.07l5.12-2.67 5.1 2.68a.93.93 0 00.46.12 1.005 1.005 0 00.99-1.19l-1-5.68 4.13-4a1 1 0 00.32-1.02zm-6.15 4a1 1 0 00-.29.89l.72 4.19-3.76-2a1 1 0 00-.94 0l-3.76 2 .72-4.19a1 1 0 00-.29-.89l-3-3 4.21-.61a1 1 0 00.76-.55l1.78-3.81 1.88 3.82a1 1 0 00.76.55l4.21.61z"
        fill='current'
      />
    </svg>
  );
}

export default SvgStar;
