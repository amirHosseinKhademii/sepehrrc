import React from 'react';
import { useClass } from 'hooks';
export const GeneralLink: React.FC<ILink> = React.forwardRef(
  (
    { className, layout, children, cssClass, style, href, onClick, target },
    ref
  ) => {
    const { toggle } = useClass();
    return (
      <a
        style={style}
        className={toggle(
          ` link ${cssClass ? cssClass : ''} cursor-pointer`,
          className,
          layout
        )}
        onClick={onClick}
        href={href}
        target={target ? target : '_self'}
      >
        {children}
      </a>
    );
  }
);
