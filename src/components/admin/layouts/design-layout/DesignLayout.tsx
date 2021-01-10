import { FC } from 'react';
import { Drawer } from 'components';
import { ILayout } from './interfaces';
import { DesignHeader, DesignFooter } from 'containers';
import { ModalCrop } from 'components';

export const DesignLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Drawer />
      <div className="z-0 min-h-screen relative">
        <DesignHeader />
        <div className="pt-8 pb-28 w-full h-full">{children}</div>
        <DesignFooter />
      </div>
      <ModalCrop />
    </div>
  );
};
