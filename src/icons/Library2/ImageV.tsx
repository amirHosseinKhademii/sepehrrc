import * as React from 'react';

function SvgImageV(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 39" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="image-v"
        d="M19.113 2.143h-14a3 3 0 00-3 3v14a3 3 0 003 3h14a2.81 2.81 0 00.49-.05l.3-.07h.12l.37-.14.13-.07c.1-.06.21-.11.31-.18a3.79 3.79 0 00.38-.32l.07-.09a2.69 2.69 0 00.27-.32l.09-.13a2.31 2.31 0 00.18-.35 1 1 0 00.07-.15c.05-.12.08-.25.12-.38v-.15a2.6 2.6 0 00.1-.6v-14a3 3 0 00-3-3zm-14 18a1 1 0 01-1-1v-4.31l3.29-3.3a1 1 0 011.42 0l8.6 8.61zm15-1a.812.812 0 01-.15.5.94.94 0 01-.09.12l-5.35-5.35.88-.88a1 1 0 011.42 0l3.29 3.3zm0-5.14l-1.88-1.86a3.08 3.08 0 00-4.24 0l-.88.88-2.88-2.88a3.08 3.08 0 00-4.24 0l-1.88 1.86v-6.86a1 1 0 011-1h14a1 1 0 011 1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgImageV;
