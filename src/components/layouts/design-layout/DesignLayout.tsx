import { FC } from 'react';
import { Drawer, ModalCrop } from 'components';
import { DesignHeader, DesignFooter } from 'containers';
import { useUi, useClass } from 'hooks';

export const DesignLayout: FC<IDesignLayout> = ({ children }) => {
  const { uiState, toggleDrawer } = useUi();
  const { open, type } = uiState.drawer;
  const { toggle } = useClass();
  return (
    <div>
      <Drawer />
      <div
        className={toggle(
          `z-0 min-h-screen relative `,
          'xl:w-drawerDynamic',
          open && type !== 'menu',
          'w-drawerFix'
        )}
        style={{ backgroundColor: '#ebedf0' }}
        onClick={
          uiState.drawer.open
            ? () => toggleDrawer({ type: '', open: false })
            : () => {}
        }
      >
        <DesignHeader />
        <div className=" pb-28 w-full h-full">{children}</div>
        <DesignFooter />
      </div>
      {uiState.modal.open && <ModalCrop />}
    </div>
  );
};
