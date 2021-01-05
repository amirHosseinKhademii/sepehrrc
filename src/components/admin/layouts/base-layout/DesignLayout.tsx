import { FC } from 'react';
import { Drawer } from 'components';
import { ILayout } from './interfaces';
import { FooterContainer } from '../../../../containers/admin';

export const DesignLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Drawer />
      <div className="z-0">
        <header className="h-20 bg-gray-500 w-full">Header</header>

        {children}

        <FooterContainer />
      </div>
    </div>
  );
};
