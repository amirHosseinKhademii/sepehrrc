import { FC } from 'react';
import { Drawer } from 'components';
import { ILayout } from './interfaces';

export const DesignLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Drawer />
      {children}
    </div>
  );
};
