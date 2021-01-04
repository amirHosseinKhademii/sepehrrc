import * as React from 'react';

function SvgEllipsisH(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 41" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="ellipsis-h"
        d="M12 9.57a2 2 0 102 2 2 2 0 00-2-2zm-7 0a2 2 0 102 2 2 2 0 00-2-2zm14 0a2 2 0 102 2 2 2 0 00-2-2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgEllipsisH;
