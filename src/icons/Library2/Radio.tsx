import * as React from 'react';

function SvgRadio(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 1.57a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
        fill='current'
      />
      <circle
        data-name="Ellipse 1"
        cx={6}
        cy={6}
        r={6}
        transform="translate(6 6)"
        fill={props?.color}
      />
    </svg>
  );
}

export default SvgRadio;
