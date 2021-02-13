import { FC } from 'react';
import { Drawer } from 'components';
import { useUi, useClass, useDesign } from 'hooks';
import dynamic from 'next/dynamic';

const ModalCrop = dynamic(() => import('components/design/modal/ModalCrop'));
const ModalConfirm = dynamic(
  () => import('components/design/modal/ModalConfirm')
);

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
        <div className=" w-full flex-grow relative pb-28 bg-gray_tint-16">
          {children}
        </div>
      </div>
      <Drawer />
      {uiState.modal.type === 'image' && uiState.modal.open && <ModalCrop />}
      {uiState.modal.type === 'confirm' && uiState.modal.open && (
        <ModalConfirm />
      )}
    </div>
  );
};
