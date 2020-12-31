import { FC } from 'react';
import { BaseDrawer } from 'components';

interface ILayout {
  children?: any;
}
export const StoreFrontLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <BaseDrawer />
      {children}
    </div>
  );
};
