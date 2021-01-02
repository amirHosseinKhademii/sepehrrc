import { FC, Fragment, useContext } from 'react';
import { DrawerSections } from './DrawerSections';
import { UIContext } from 'providers/ui-provider';
import { DrawerAdd } from './DrawerAdd';
import { DrawerSettings } from './DrawerSettings';

interface IDrawer {
  children?: any;
}
export const DrawerDynamic: FC<IDrawer> = () => {
  const { uiState } = useContext(UIContext);
  return (
    <Fragment>
      {uiState.drawer.sections && <DrawerSections />}
      {uiState.drawer.add && <DrawerAdd />}
      {uiState.drawer.settings && <DrawerSettings />}
    </Fragment>
  );
};
