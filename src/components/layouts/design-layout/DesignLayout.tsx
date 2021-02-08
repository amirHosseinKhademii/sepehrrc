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
      className={`h-screen  flex ${
        direction === 'rtl' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <Drawer />
      <div
        className={toggle(
          `z-0 h-full flex flex-col bg-gray_tint-16`,
          'xl:w-drawerDynamic',
          open && type !== 'menu',
          'w-drawerFix'
        )}
        onClick={
          uiState.drawer.open
            ? () => toggleDrawer({ type: '', open: false })
            : () => {}
        }
      >
        <DesignHeader />
        <div className=" w-full flex-grow relative pb-28 bg-gray_tint-16">
          {children}
          <DesignFooter />
        </div>
      </div>
      {uiState.modal.open && <ModalCrop />}
    </div>
  );
};
