import React from 'react';
import { useClass, useDesign } from 'hooks';

export const HeaderLayout = ({ children }) => {
  const { join, toggle } = useClass();
  const { designState } = useDesign();

  return (
    <div
      className={toggle(
        '',
        'relative pt-12 pb-8 border-t-2 border-b-2 border-dashed border-opacity-70 border-primary-700',
        designState.current.type == 'header' &&
          designState.current.uuid == 'HEADER'
      )}
    >
      <div
        className={toggle(
          '',
          'absolute top-0 left-0 opacity-10 w-full h-full bg-primary-700 ',
          designState.current.type == 'header' &&
            designState.current.uuid == 'HEADER',
          'hidden'
        )}
      ></div>
      <div className={`bg-white shadow-custom-1`}>{children}</div>
    </div>
  );
};
