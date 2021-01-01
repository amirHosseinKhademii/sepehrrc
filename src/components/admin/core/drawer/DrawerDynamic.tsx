import { FC, Fragment, useContext } from 'react';
import { DrawerSections } from './DrawerSections';
import { UIContext } from 'providers/ui-provider';
import { DrawerAdd } from './DrawerAdd';

interface IDrawer {
  children?: any;
}
export const DrawerDynamic: FC<IDrawer> = () => {
  const { uiState, uiDispatch } = useContext(UIContext);
  return (
    <Fragment>
      {uiState.drawer.sections && <DrawerSections />}
      {uiState.drawer.add && <DrawerAdd />}
    </Fragment>
  );
};
