import { FC } from 'react';
import { Drawer, ModalCrop } from 'components';
import { DesignHeader, DesignFooter } from 'containers';
import { useUi, useClass, useDesign } from 'hooks';

export const DesignLayout: FC<IDesignLayout> = ({ children }) => {
  const { uiState, toggleDrawer } = useUi();
  const { open, type } = uiState.drawer;
  const { toggle } = useClass();
  const { designState } = useDesign();
  const { direction } = designState.pageSettings;
  return (
    <div
      className={` flex ${
        direction === 'rtl' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
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
