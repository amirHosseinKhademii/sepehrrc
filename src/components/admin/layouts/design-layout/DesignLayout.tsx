import { FC } from 'react';
import { Drawer, ModalCrop } from 'components';
import { ILayout } from './interfaces';
import { DesignHeader, DesignFooter } from 'containers';
import { useUi } from 'hooks';

export const DesignLayout: FC<ILayout> = ({ children }) => {
  const { uiState } = useUi();

  return (
    <div>
      <Drawer />
      <div className="z-0 min-h-screen relative">
        <DesignHeader />
        <div className=" pb-28 w-full h-full">{children}</div>
        <DesignFooter />
      </div>
      {uiState.modal.open && <ModalCrop />}
    </div>
  );
};
