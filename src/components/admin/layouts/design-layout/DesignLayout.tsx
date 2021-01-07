import { FC } from 'react';
import { Drawer } from 'components';
import { ILayout } from './interfaces';
import { DesignHeader, DesignFooter } from 'containers';

export const DesignLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Drawer />
      <div className="z-0 ">
        <DesignHeader />
        <div className="py-20">{children}</div>
        <DesignFooter />
      </div>
    </div>
  );
};
