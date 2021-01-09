import { FC } from 'react';
import { Drawer } from 'components';
import { ILayout } from './interfaces';
import { DesignHeader, DesignFooter } from 'containers';
import { ModalCrop } from 'components';

export const DesignLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Drawer />
      <div className="z-0">
        <DesignHeader />
        {/* <div className="py-20">{children}</div> fix */}
        <div>{children}</div>
        <DesignFooter />
      </div>
      <ModalCrop />
    </div>
  );
};
