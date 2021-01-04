import * as React from 'react';

function SvgMap(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="map"
        d="M21.733 3.908l-6-2h-.07a.7.7 0 00-.14 0h-.43l-5.68 1.95-5.68-1.95a1.008 1.008 0 00-1.32.95v14a1 1 0 00.68.95l6 2a1 1 0 00.62 0l5.7-1.9 5.68 1.95a1.19 1.19 0 00.32 0 .94.94 0 00.58-.19 1 1 0 00.42-.81v-14a1 1 0 00-.68-.95zm-13.32 13.56l-4-1.33V4.248l4 1.33zm6-1.33l-4 1.33V5.578l4-1.33zm6 1.33l-4-1.33V4.248l4 1.33z"
        fill='current'
      />
    </svg>
  );
}

export default SvgMap;
