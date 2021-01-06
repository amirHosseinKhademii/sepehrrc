import { FC } from 'react';
import { Drawer } from 'components';
import { ILayout } from './interfaces';
import { Header, FooterContainer } from 'containers';

export const DesignLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Drawer />
      <div className="z-0">
        <Header />
        {children}
        <FooterContainer />
      </div>
    </div>
  );
};
