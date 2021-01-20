import { FC } from 'react';
import { Drawer, ModalCrop } from 'components';
import { ILayout } from './interfaces';
import { DesignHeader, DesignFooter } from 'containers';
import { useUi, useClass } from 'hooks';

export const DesignLayout: FC<ILayout> = ({ children }) => {
  const { uiState } = useUi();
  const { toggle } = useClass();
  return (
    <div>
      <Drawer />
      <div
        className={toggle(
          `z-0 min-h-screen relative `,
          'xl:w-drawerDynamic',
          uiState.drawer.settings ||
            uiState.drawer.sections ||
            uiState.drawer.add ||
            uiState.drawer.style,
          'w-drawerFix'
        )}
      >
        <DesignHeader />
        <div className=" pb-28 w-full h-full">{children}</div>
        <DesignFooter />
      </div>
      {uiState.modal.open && <ModalCrop />}
    </div>
  );
};
