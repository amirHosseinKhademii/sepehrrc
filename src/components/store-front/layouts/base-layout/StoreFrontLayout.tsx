import { FC } from 'react';
import { Drawer } from 'components';

interface ILayout {
  children?: any;
}
export const StoreFrontLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Drawer />
      {children}
    </div>
  );
};
