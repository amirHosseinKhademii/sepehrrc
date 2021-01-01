import { FC } from 'react';
import { Drawer } from 'components';
import { ILayout } from './interfaces';

export const DesignLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Drawer />
      <div className="z-0">{children}</div>
    </div>
  );
};
